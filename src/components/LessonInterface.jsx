"use client";

import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import {
    Play, Send, Terminal as TerminalIcon, Loader2,
    Lightbulb, Bot, Target, ChevronRight, ChevronDown
} from 'lucide-react';
import { translations } from '@/data/translations';

const LessonInterface = ({ lesson, onComplete, lang = 'pt' }) => {
    const t = translations[lang];
    const [code, setCode] = useState(lesson.initialCode);
    const [output, setOutput] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [pyodide, setPyodide] = useState(null);
    const [isPyodideLoading, setIsPyodideLoading] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [activeTab, setActiveTab] = useState('console'); // 'tests' ou 'console'
    const [expectedOutput, setExpectedOutput] = useState('');

    // Cache for last execution to avoid redundant runs during submission
    const [lastRunCode, setLastRunCode] = useState(null);
    const [lastRunOutput, setLastRunOutput] = useState([]);
    const [lastRunVars, setLastRunVars] = useState({});
    const [isLastRunValid, setIsLastRunValid] = useState(false);

    useEffect(() => {
        setCode(lesson.initialCode);
        setOutput([]);
        setShowSolution(false);
        setExpectedOutput(lesson.solution.match(/'([^']+)'/)?.[1] || '');

        // Reset cache when lesson changes
        setLastRunCode(null);
        setLastRunOutput([]);
        setLastRunVars({});
        setIsLastRunValid(false);

        // Pre-load Pyodide if it's a python lesson
        if (lesson.id && lesson.id.startsWith('py') && !pyodide && !isPyodideLoading) {
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
                    script.onerror = () => reject(new Error(t.pyodide_error));
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
                            setOutput([t.success_msg]);
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
                    setOutput([t.python_loading]);
                    py = await loadPyodideInstance();
                    if (!py) {
                        setOutput([t.python_engine_error]);
                        setIsRunning(false);
                        return;
                    }
                    setOutput([t.python_ready]);
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
                        setOutput([t.success_msg]);
                    }

                    // Capture variables for cache
                    const pythonVarsExtractor = `
import json
def get_vars():
    return {k: v for k, v in globals().items() if not k.startswith('__') and k != 'get_vars'}
json.dumps(get_vars(), default=str)
                    `;
                    const varsJson = py.runPython(pythonVarsExtractor);
                    const pyVars = JSON.parse(varsJson);

                    // Update cache
                    setLastRunCode(code);
                    setLastRunOutput(logs);
                    setLastRunVars(pyVars);
                    setIsLastRunValid(true);

                } catch (e) {
                    setOutput(prev => [...prev, `Error Python: ${e.message}`]);
                    setIsLastRunValid(false);
                }
            }
        } catch (err) {
            setOutput([`Error: ${err.message}`]);
            setIsLastRunValid(false);
        } finally {
            setIsRunning(false);
        }
    };

    const submitCode = async () => {
        // Advanced verification using the 'test' field in JSON
        try {
            let passed = false;
            let outputToTest = output;
            let currentVars = {};
            let shouldRun = code !== lastRunCode || !isLastRunValid;

            const outputString = output.join('\n').trim();

            if (lesson.id.startsWith('js')) {
                // For JS we still run it within the test function context to isolate scope if needed
                // or we could cache too, but JS doesn't have the input() problem usually.
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
                // Python - Avoid re-execution if code didn't change and last run was OK
                if (pyodide) {
                    try {
                        if (shouldRun) {
                            console.log("Submitting: Code changed or invalid cache, running again...");
                            await pyodide.runPythonAsync(code);
                            const pythonVarsExtractor = `
import json
def get_vars():
    return {k: v for k, v in globals().items() if not k.startswith('__') and k != 'get_vars'}
json.dumps(get_vars(), default=str)
                            `;
                            const varsJson = pyodide.runPython(pythonVarsExtractor);
                            currentVars = JSON.parse(varsJson);
                            outputToTest = output; // Use current output
                        } else {
                            console.log("Submitting: Using cached execution results");
                            currentVars = lastRunVars;
                            outputToTest = lastRunOutput;
                        }

                        const context = { ...currentVars, output: outputToTest.join('\n').trim() };
                        const keys = Object.keys(context);
                        const values = Object.values(context);

                        const testFn = new Function(...keys, `return (${lesson.test})`);
                        passed = !!testFn(...values);
                    } catch (e) {
                        console.error("Python Test evaluation error:", e);
                        const expectedOutput = lesson.solution.match(/'([^']+)'/)?.[1];
                        passed = (expectedOutput && outputString.includes(expectedOutput));
                    }
                } else {
                    const expectedOutput = lesson.solution.match(/'([^']+)'/)?.[1];
                    passed = expectedOutput && outputString.includes(expectedOutput);
                }
            }

            if (passed) {
                setOutput(prev => [...prev, t.exercise_success]);
                onComplete();
            } else {
                alert(t.incorrect_code);
            }
        } catch (err) {
            alert(`${t.verification_error} ${err.message}`);
        }
    };

    const [activeHint, setActiveHint] = useState(null);

    return (
        <div className="flex flex-col md:flex-row flex-1 h-full overflow-hidden bg-[#1e1e1e]">
            {/* Left Pane - Instructions */}
            <div className="w-full md:w-5/12 p-0 overflow-y-auto border-b md:border-b-0 md:border-r border-white/5 bg-[#1e1e1e] custom-scrollbar flex flex-col max-h-[45%] md:max-h-full">
                {/* Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <h1 className="text-xl font-bold text-white tracking-tight">
                        {lesson.title.split(' – ')[1] || lesson.title.split(' - ')[1] || lesson.title}
                    </h1>
                    <div className="flex gap-2">
                        <button className="px-2 py-1 text-[10px] bg-white/10 text-slate-400 rounded hover:bg-white/20 transition-colors">{t.lesson_summary}</button>
                        <button className="px-2 py-1 text-[10px] bg-white/10 text-slate-400 rounded hover:bg-white/20 transition-colors">{t.hide}</button>
                    </div>
                </div>

                <div className="p-6 space-y-8">
                    {/* Description */}
                    <p className="text-[#d4d4d4] text-sm leading-relaxed">
                        {lesson.description}
                    </p>

                    {/* Task Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Lightbulb size={18} className="text-white" />
                            <h2 className="text-lg font-bold text-white">{t.challenge}</h2>
                            <span className="px-2 py-0.5 bg-cyan-900/40 text-cyan-400 text-[10px] font-bold rounded-full border border-cyan-800/50 uppercase">{t.beginner}</span>
                        </div>
                        <p className="text-[#d4d4d4] text-sm leading-relaxed">
                            {lesson.instructions || "Siga as instruções para completar o desafio."}
                        </p>

                        <div className="space-y-3 mt-4">
                            <h3 className="text-sm font-bold text-white">{t.to_do}</h3>
                            <div className="space-y-4">
                                {lesson.tasks ? lesson.tasks.map((task, idx) => (
                                    <div key={idx} className="flex gap-3 text-sm text-[#d4d4d4]">
                                        <span className="font-bold text-white">{idx + 1}.</span>
                                        <p>{task}</p>
                                    </div>
                                )) : (
                                    <div className="space-y-2">
                                        <div className="flex gap-3 text-sm text-[#d4d4d4]">
                                            <span className="font-bold text-white">1.</span>
                                            <p>Analise o código inicial no editor.</p>
                                        </div>
                                        <div className="flex gap-3 text-sm text-[#d4d4d4]">
                                            <span className="font-bold text-white">2.</span>
                                            <p>Pressione o botão "Executar Código" para testar.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="mt-4 px-4 py-2 border border-cyan-800 text-cyan-400 text-xs font-bold rounded-lg hover:bg-cyan-900/20 transition-all">
                            {t.explain_challenge}
                        </button>
                    </div>

                    {/* Solution Accordion */}
                    <div className="border border-white/5 rounded-xl overflow-hidden bg-white/5">
                        <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="w-full flex items-center justify-between p-4 text-white font-bold text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <Target size={16} />
                                <span>{t.solution}</span>
                            </div>
                            <ChevronRight size={16} className={`transition-transform duration-300 ${showSolution ? 'rotate-90' : ''}`} />
                        </button>
                        {showSolution && (
                            <div className="p-4 pt-0 text-slate-400 text-xs font-mono bg-black/20">
                                <pre className="whitespace-pre-wrap">{lesson.solution}</pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Pane - Editor & Terminal */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
                    <span className="text-[11px] text-[#969696] font-medium">{lesson.id?.startsWith('js') ? 'Javascript' : 'Python'}</span>
                    <div className="flex items-center gap-4">
                        <button className="text-[#969696] hover:text-white transition-colors" title="Volume">
                            <span className="text-xs">🔈</span>
                        </button>
                        <button onClick={() => setCode(lesson.initialCode)} className="text-[#969696] hover:text-white transition-colors" title="Resetar">
                            <span className="text-xs">🔄</span>
                        </button>
                    </div>
                </div>

                {/* Editor */}
                <div className="flex-1 relative bg-[#1e1e1e]">
                    <Editor
                        height="100%"
                        defaultLanguage={lesson.id?.startsWith('js') ? 'javascript' : 'python'}
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value)}
                        options={{
                            fontSize: 14,
                            minimap: { enabled: false },
                            padding: { top: 20 },
                            scrollBeyondLastLine: false,
                            fontFamily: "'Fira Code', 'Courier New', monospace",
                            backgroundColor: '#1e1e1e',
                            lineNumbersMinChars: 3,
                            renderLineHighlight: "all",
                            scrollbar: { vertical: "hidden" }
                        }}
                    />

                    {/* Editor Actions Bottom Bar */}
                    <div className="absolute bottom-4 right-4 flex gap-3 z-10">
                        <button
                            onClick={runCode}
                            disabled={isRunning || isPyodideLoading}
                            className="flex items-center gap-2 px-6 py-2 bg-[#333333] hover:bg-[#444444] text-white text-xs font-bold rounded-lg border border-white/10 transition-all active:scale-[0.98] disabled:opacity-50"
                        >
                            {isRunning || isPyodideLoading ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} className="fill-white" />}
                            {t.run_code}
                        </button>
                        <button
                            onClick={submitCode}
                            className="flex items-center gap-2 px-4 py-2 bg-[#007acc] hover:bg-[#0062a3] text-white text-xs font-bold rounded-lg transition-all shadow-lg active:scale-[0.98]"
                        >
                            <Send size={14} /> {t.send}
                        </button>
                    </div>
                </div>

                {/* Terminal Pane */}
                <div className="h-64 bg-[#1e1e1e] border-t border-white/5 flex flex-col">
                    <div className="flex items-center justify-between px-4 border-b border-white/5 bg-[#252526]">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('tests')}
                                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all border-b-2 ${activeTab === 'tests' ? 'border-[#007acc] text-white' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                            >
                                {t.test_cases}
                            </button>
                            <button
                                onClick={() => setActiveTab('console')}
                                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all border-b-2 ${activeTab === 'console' ? 'border-[#007acc] text-white' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                            >
                                {t.console}
                            </button>
                        </div>
                        <button
                            onClick={() => setOutput([])}
                            className="text-[16px] text-slate-500 hover:text-slate-300"
                        >
                            🗑️
                        </button>
                    </div>

                    <div className="flex-1 flex overflow-hidden">
                        <div className="flex-1 p-4 overflow-y-auto custom-scrollbar font-mono text-xs">
                            <span className="text-slate-500 mb-2 block">{t.output}</span>
                            <div className="space-y-1">
                                {output.length > 0 ? (
                                    output.map((line, i) => (
                                        <div key={i} className="text-[#d4d4d4]">{line}</div>
                                    ))
                                ) : (
                                    <div className="text-slate-600 italic">{t.waiting_execution}</div>
                                )}
                            </div>
                        </div>

                        <div className="w-1/3 p-4 border-l border-white/5 bg-black/10 flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-500 text-xs">{t.expected_output}</span>
                                <div className="w-8 h-4 bg-slate-700 rounded-full relative">
                                    <div className="absolute left-1 top-1 w-2 h-2 bg-slate-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="text-white text-sm font-bold mt-2">
                                {expectedOutput || "Olá, Mundo!"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonInterface;
