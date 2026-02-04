"use client";

import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import {
    Play, Send, Terminal as TerminalIcon, Loader2,
    Lightbulb, Bot, Target, ChevronRight, ChevronDown
} from 'lucide-react';

const LessonInterface = ({ lesson, onComplete }) => {
    const [code, setCode] = useState(lesson.initialCode);
    const [output, setOutput] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [pyodide, setPyodide] = useState(null);
    const [isPyodideLoading, setIsPyodideLoading] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [isIntroVisible, setIsIntroVisible] = useState(true);

    useEffect(() => {
        setCode(lesson.initialCode);
        setOutput([]);
        setShowSolution(false);

        // Pre-load Pyodide if it's a python lesson
        if (lesson.id.startsWith('py') && !pyodide && !isPyodideLoading) {
            loadPyodideInstance();
        }
    }, [lesson]);

    // ... (rest of the logic functions remain the same: loadPyodideInstance, runCode, submitCode)

    const loadPyodideInstance = async () => {
        if (pyodide) return pyodide;
        setIsPyodideLoading(true);
        try {
            console.log("Starting Pyodide load...");
            if (!window.loadPyodide) {
                const script = document.createElement('script');
                script.id = 'pyodide-script';
                script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
                document.head.appendChild(script);
                await new Promise((resolve, reject) => {
                    script.onload = resolve;
                    script.onerror = () => reject(new Error("Falha ao carregar o script do Pyodide da CDN. Verifique sua conexão."));
                });
            }

            const py = await window.loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
            });

            // Mock input() using window.prompt since we're in the main thread
            await py.runPythonAsync(`
import builtins
import js
def input_mock(prompt=""):
    res = js.prompt(prompt)
    if res is None:
        return ""
    return res
builtins.input = input_mock
            `);

            setPyodide(py);
            console.log("Pyodide loaded successfully");
            return py;
        } catch (err) {
            console.error("Pyodide Load Error:", err);
            setOutput(prev => [...prev, `Erro detalhado: ${err.message}`]);
            return null;
        } finally {
            setIsPyodideLoading(false);
        }
    };

    const runCode = async () => {
        setIsRunning(true);
        setOutput([]);
        let logs = [];

        try {
            if (lesson.id.startsWith('js')) {
                // Execute JS
                const originalLog = console.log;
                console.log = (...args) => {
                    const msg = args.map(a => String(a)).join(' ');
                    logs.push(msg);
                    setOutput(prev => [...prev, msg]);
                    originalLog(...args);
                };

                try {
                    const result = eval(`(function() { 
            const print = (...args) => console.log(...args);
            ${code} 
          })()`);

                    if (logs.length === 0) {
                        if (result !== undefined) {
                            setOutput([String(result)]);
                        } else {
                            setOutput(['✓ Código executado com sucesso (sem saída).']);
                        }
                    }
                } catch (e) {
                    setOutput([`Error: ${e.message}`]);
                } finally {
                    console.log = originalLog;
                }
            } else {
                // Execute Python
                let py = pyodide;
                if (!py) {
                    setOutput(["Carregando Python..."]);
                    py = await loadPyodideInstance();
                    if (!py) {
                        setOutput(["Erro ao carregar o motor Python."]);
                        setIsRunning(false);
                        return;
                    }
                    setOutput(["Python pronto!"]);
                }

                // Capture Python stdout
                py.setStdout({
                    batched: (str) => {
                        logs.push(str);
                        setOutput([...logs]);
                    }
                });

                try {
                    await py.runPythonAsync(code);
                    if (logs.length === 0) {
                        setOutput(['✓ Código executado com sucesso (sem saída).']);
                    }
                } catch (e) {
                    setOutput(prev => [...prev, `Error Python: ${e.message}`]);
                }
            }
        } catch (err) {
            setOutput([`Error: ${err.message}`]);
        } finally {
            setIsRunning(false);
        }
    };

    const submitCode = async () => {

        // Advanced verification using the 'test' field in JSON
        try {
            let passed = false;
            const outputString = output.join('\n').trim();

            if (lesson.id.startsWith('js')) {
                // Evaluate the test with user code included so variables are in scope
                try {
                    const testWithCode = `
                        ${code};
                        return (${lesson.test});
                    `;
                    const testFn = new Function('output', testWithCode);
                    passed = testFn(outputString);
                } catch (e) {
                    console.error("JS Test evaluation error:", e);
                    passed = false;
                }
            } else {

                // Python - Safer verification
                if (pyodide) {
                    try {
                        // Execute user code in the global scope first to ensure variables are defined
                        await pyodide.runPythonAsync(code);

                        const pythonTest = `
import json
def run_test():
    # Simple evaluation of the JS test logic in Py context if possible
    # Or just return defined variables
    return {k: v for k, v in globals().items() if not k.startswith('__') and k != 'run_test'}

json.dumps(run_test(), default=str)
                        `;
                        const varsJson = pyodide.runPython(pythonTest);

                        const pyVars = JSON.parse(varsJson);

                        const context = { ...pyVars, output: outputString };
                        const keys = Object.keys(context);
                        const values = Object.values(context);

                        const testFn = new Function(...keys, `return (${lesson.test})`);
                        passed = !!testFn(...values);
                    } catch (e) {
                        console.error("Python Test evaluation error:", e);
                        // Final fallback to output check
                        const expectedOutput = lesson.solution.match(/'([^']+)'/)?.[1];
                        passed = (expectedOutput && outputString.includes(expectedOutput));
                    }
                } else {
                    const expectedOutput = lesson.solution.match(/'([^']+)'/)?.[1];
                    passed = expectedOutput && outputString.includes(expectedOutput);
                }
            }

            if (passed) {
                setOutput(prev => [...prev, "✅ EXERCÍCIO CONCLUÍDO COM SUCESSO!"]);
                onComplete();
            } else {
                alert("❌ Código incorreto ou não atende aos requisitos. Tente novamente.");
            }
        } catch (err) {
            alert(`Erro na verificação: ${err.message}`);
        }
    };

    const [activeHint, setActiveHint] = useState(null);

    return (
        <div className="flex flex-col md:flex-row flex-1 h-full overflow-hidden bg-[#0a1219]">
            {/* Left Pane - Instructions */}
            <div className="w-full md:w-5/12 p-0 overflow-y-auto border-b md:border-b-0 md:border-r border-slate-800/50 bg-[#0a1219] custom-scrollbar flex flex-col max-h-[45%] md:max-h-full">
                {/* Header */}
                <div className="px-8 py-6 border-b border-white/5">
                    <div className="text-[10px] font-black text-[#00d1ff] tracking-[0.2em] mb-2 uppercase">
                        {lesson.id.startsWith('py') ? 'ESCOLA_TECH PYTHON' : 'ESCOLA_TECH JAVASCRIPT'}
                    </div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                        {lesson.title.split(' – ')[1] || lesson.title.split(' - ')[1] || lesson.title}
                    </h1>
                </div>

                <div className="p-8 space-y-10">
                    {/* Intro Section */}
                    <div className="space-y-4">
                        <p className="text-[#a0aec0] leading-relaxed text-[16px]">
                            {lesson.description}
                        </p>
                    </div>

                    <div className="h-px bg-white/5"></div>

                    {/* Task Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-lg">Sua Tarefa:</span>
                        </div>
                        <p className="text-[#ccd6f6] text-[16px] leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                            {lesson.instructions}
                        </p>
                    </div>

                    {/* Hints Section */}
                    {(lesson.hints && lesson.hints.length > 0) && (
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-2 text-[#ecc94b]">
                                <Lightbulb size={20} />
                                <h3 className="text-lg font-bold">Hints</h3>
                            </div>

                            <div className="space-y-3">
                                {lesson.hints.map((hint, idx) => (
                                    <div key={idx} className="border border-white/10 rounded-xl overflow-hidden bg-[#1a202c]/50">
                                        <button
                                            onClick={() => setActiveHint(activeHint === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-all text-slate-300 font-medium text-sm"
                                        >
                                            <span>Hint {idx + 1}</span>
                                            <ChevronDown className={`transition-transform duration-300 ${activeHint === idx ? 'rotate-180' : ''}`} size={16} />
                                        </button>
                                        {activeHint === idx && (
                                            <div className="px-4 pb-4 pt-1 text-slate-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                                {hint}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Actions - Fixed on Mobile, Integrated on Desktop */}
                <div className="mt-auto p-8 bg-gradient-to-t from-black/20 to-transparent">
                    <div className="flex gap-4">
                        <button
                            onClick={runCode}
                            disabled={isRunning || isPyodideLoading}
                            className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-slate-800/80 hover:bg-slate-700 text-white rounded-xl transition-all border border-slate-700/50 disabled:opacity-50 font-bold text-sm"
                        >
                            {isRunning || isPyodideLoading ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} className="fill-white" />}
                            {isPyodideLoading ? 'CARREGANDO...' : 'EXECUTAR'}
                        </button>
                        <button
                            onClick={submitCode}
                            className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] text-sm"
                        >
                            <Send size={18} /> ENVIAR
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Pane - Editor & Terminal */}
            <div className="flex-1 flex flex-col bg-[#011627]">
                <div className="flex-1 relative">
                    <div className="absolute top-0 right-0 p-4 z-10 flex items-center gap-2">
                        <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-500 border border-white/10">
                            {lesson.id.startsWith('js') ? 'main.js' : 'main.py'}
                        </div>
                    </div>
                    <Editor
                        height="100%"
                        defaultLanguage={lesson.id.startsWith('js') ? 'javascript' : 'python'}
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value)}
                        options={{
                            fontSize: 16,
                            minimap: { enabled: false },
                            padding: { top: 40 },
                            scrollBeyondLastLine: false,
                            fontFamily: "'Fira Code', 'Courier New', monospace",
                            fontLigatures: true,
                            smoothScrolling: true,
                            cursorBlinking: "expand",
                            backgroundColor: '#011627',
                            lineNumbersMinChars: 3,
                            glyphMargin: false,
                            folding: false,
                            lineDecorationsWidth: 10
                        }}
                    />
                </div>

                {/* Terminal */}
                <div className="h-56 border-t border-white/5 bg-[#011627] p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-slate-400">
                            <TerminalIcon size={16} className="text-[#00d1ff]" />
                            <span className="text-xs font-black uppercase tracking-[0.1em]">Console</span>
                        </div>
                        <button
                            onClick={() => setOutput([])}
                            className="text-[10px] text-slate-500 hover:text-slate-300 uppercase font-black tracking-widest transition-colors"
                        >
                            CLEAR
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto font-mono text-[14px] custom-scrollbar space-y-2">
                        {output.length > 0 ? (
                            output.map((line, i) => (
                                <div key={i} className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
                                    <span className="text-[#00d1ff] opacity-50 select-none">›</span>
                                    <span className={line.startsWith('Error') || line.includes('❌') ? 'text-red-400' : line.includes('✅') ? 'text-green-400' : 'text-[#d6deeb]'}>{line}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-slate-600 italic text-[13px] flex items-center gap-2 opacity-50">
                                <div className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-pulse"></div>
                                Aguardando execução...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonInterface;
