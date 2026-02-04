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

    return (
        <div className="flex flex-col md:flex-row flex-1 h-full overflow-hidden">
            {/* Left Pane - Instructions */}
            <div className="w-full md:w-1/3 p-0 overflow-y-auto border-b md:border-b-0 md:border-r border-slate-800 bg-[#161616] custom-scrollbar flex flex-col max-h-[35%] md:max-h-full">
                {/* Fixed Header */}
                <div className="p-4 border-b border-white/5 bg-[#1a1a1a]">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        {lesson.title.split(' - ')[0]}
                    </h2>
                </div>

                <div className="p-6 space-y-8">
                    {/* Content Section */}
                    {isIntroVisible && (
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white">{lesson.title.split(' - ')[1] || 'A Linguagem'}</h3>
                                <div className="flex gap-2">
                                    <button className="text-[10px] font-bold bg-slate-800 text-slate-400 px-2 py-1 rounded">TL;DR</button>
                                    <button
                                        onClick={() => setIsIntroVisible(false)}
                                        className="text-[10px] font-bold bg-slate-800 text-slate-400 px-2 py-1 rounded hover:bg-slate-700"
                                    >
                                        Ocultar
                                    </button>
                                </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-[14px] font-bold">
                                {lesson.description}
                            </p>
                        </div>
                    )}

                    {/* Challenge Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                <Lightbulb size={18} className="text-white" />
                            </div>
                            <h3 className="text-xl font-black text-white">Desafio</h3>
                            <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30">Iniciante</span>
                        </div>

                        <div className="space-y-4">
                            <p className="text-slate-200 font-bold text-[14px]">
                                {lesson.instructions}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/5">
                                    <h4 className="text-[14px] font-bold text-white">O que fazer:</h4>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={runCode}
                                            disabled={isRunning || isPyodideLoading}
                                            className="flex items-center px-2 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-all border border-slate-600 disabled:opacity-50 text-[10px] font-bold"
                                        >
                                            {isRunning || isPyodideLoading ? <Loader2 size={12} className="mr-1 animate-spin" /> : <Play size={12} className="mr-1 fill-current hover:text-green-400" />}
                                            {isPyodideLoading ? '...' : 'Executar'}
                                        </button>
                                        <button
                                            onClick={submitCode}
                                            className="flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md shadow-lg shadow-blue-600/20 transition-all active:scale-95 text-[10px]"
                                        >
                                            <Send size={12} className="mr-1" /> Enviar
                                        </button>
                                    </div>
                                </div>
                                <ol className="list-decimal list-inside space-y-2 text-[14px] text-slate-400 font-bold">
                                    <li>Analise o código inicial no editor ao lado.</li>
                                    <li>Pressione o botão "Executar" para testar sua lógica.</li>
                                    <li>Verifique se a saída no terminal está correta.</li>
                                </ol>
                            </div>

                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-blue-400 text-xs font-bold hover:bg-white/10 transition-colors">
                                <Bot size={16} />
                                Explicar desafio
                            </button>
                        </div>
                    </div>

                    {/* Solution Section */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                <Target size={18} className="text-white" />
                            </div>
                            <h3 className="text-xl font-black text-white">Solução</h3>
                        </div>

                        <div className="border border-white/10 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setShowSolution(!showSolution)}
                                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors text-slate-400 font-bold text-sm"
                            >
                                <span>Solução</span>
                                <ChevronRight className={`transition-transform ${showSolution ? 'rotate-90' : ''}`} size={16} />
                            </button>
                            {showSolution && (
                                <div className="p-4 bg-black/40 border-t border-white/10 font-mono text-xs text-green-400">
                                    <pre className="whitespace-pre-wrap">{lesson.solution}</pre>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Pane - Editor & Terminal */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                <div className="flex-1 relative">
                    <Editor
                        height="100%"
                        defaultLanguage={lesson.id.startsWith('js') ? 'javascript' : 'python'}
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value)}
                        options={{
                            fontSize: 16,
                            minimap: { enabled: false },
                            padding: { top: 24 },
                            scrollBeyondLastLine: false,
                            fontFamily: "'Fira Code', 'Courier New', monospace",
                            fontLigatures: true,
                            smoothScrolling: true,
                            cursorBlinking: "expand"
                        }}
                    />
                </div>

                {/* Terminal */}
                <div className="h-48 border-t border-slate-800 bg-[#0c0c0c] p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-3 px-1">
                        <div className="flex items-center text-slate-500">
                            <TerminalIcon size={14} className="mr-2 text-blue-500" />
                            <span className="text-xs font-bold uppercase tracking-widest">Saída</span>
                        </div>
                        <button
                            onClick={() => setOutput([])}
                            className="text-[10px] text-slate-600 hover:text-slate-400 uppercase font-bold tracking-tighter"
                        >
                            Limpar
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto font-mono text-sm custom-scrollbar px-1">
                        {output.length > 0 ? (
                            output.map((line, i) => (
                                <div key={i} className="mb-1 flex">
                                    <span className="text-blue-900 mr-2 shrink-0">➜</span>
                                    <span className={line.startsWith('Error') ? 'text-red-400' : 'text-slate-300'}>{line}</span>
                                </div>
                            ))
                        ) : (
                            <div className="text-slate-700 italic text-xs">Aguardando execução...</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonInterface;
