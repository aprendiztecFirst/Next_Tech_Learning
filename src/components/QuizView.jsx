"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle2,
    XCircle,
    HelpCircle,
    RotateCcw,
    ArrowRight,
    ClipboardList,
    Check,
    Award,
    BookOpen,
    ChevronDown,
    Globe
} from 'lucide-react';
import { quizzes } from '@/data/quizzes';
import { translations } from '@/data/translations';

const QuizView = ({ lang = 'pt', selectedLanguage = 'js', onLanguageChange, coursesData }) => {
    const t = translations[lang] || translations['pt'];
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [selectedGaps, setSelectedGaps] = useState({});
    const [feedback, setFeedback] = useState(null);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    const chapters = coursesData?.filter(c => c.id.startsWith(selectedLanguage)) || [];
    const currentQuizData = quizzes[lang] || quizzes['pt'];
    const currentQuiz = selectedChapter ? (currentQuizData[selectedLanguage]?.[selectedChapter] || []) : [];
    const currentQuestion = currentQuiz[currentQuestionIndex];

    const handleSelectChapter = (chapterId) => {
        if (!currentQuizData[selectedLanguage]?.[chapterId]) {
            alert(lang === 'pt' ? "Questionário ainda não disponível para este capítulo." : "Quiz not yet available for this chapter.");
            return;
        }
        setSelectedChapter(chapterId);
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsFinished(false);
        setFeedback(null);
        setSelectedAnswer(null);
        setSelectedGaps({});
    };

    const checkAnswer = () => {
        if (currentQuestion.type === 'fill-in-the-gaps') {
            const isAllCorrect = currentQuestion.gaps.every((gap, idx) => selectedGaps[idx] === gap.answer);
            setFeedback(isAllCorrect ? 'correct' : 'incorrect');
            if (isAllCorrect) setScore(s => s + 1);
        } else {
            const isCorrect = String(selectedAnswer) === String(currentQuestion.answer);
            setFeedback(isCorrect ? 'correct' : 'incorrect');
            if (isCorrect) setScore(s => s + 1);
        }
    };

    const handleGapSelection = (gapIdx, optIdx) => {
        setSelectedGaps(prev => ({ ...prev, [gapIdx]: optIdx }));
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < currentQuiz.length - 1) {
            setCurrentQuestionIndex(i => i + 1);
            setFeedback(null);
            setSelectedAnswer(null);
            setSelectedGaps({});
        } else {
            setIsFinished(true);
        }
    };

    if (!selectedChapter) {
        return (
            <div className="flex-1 overflow-y-auto p-8 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <h1 className="text-3xl font-black text-white">{lang === 'pt' ? 'Questionários por Capítulo' : 'Chapter Quizzes'}</h1>

                                <div className="relative">
                                    <button
                                        onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl hover:border-pink-500/50 transition-all text-xs font-black tracking-widest text-pink-500 uppercase"
                                    >
                                        <Globe size={14} />
                                        {selectedLanguage === 'js' ? 'JAVASCRIPT' : 'PYTHON'}
                                        <ChevronDown size={14} className={`transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isLangDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => {
                                                        onLanguageChange('js');
                                                        setIsLangDropdownOpen(false);
                                                    }}
                                                    className={`w-full px-4 py-3 text-left text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-between ${selectedLanguage === 'js' ? 'text-pink-500' : 'text-slate-400'}`}
                                                >
                                                    JAVASCRIPT
                                                    {selectedLanguage === 'js' && <Check size={14} />}
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        onLanguageChange('py');
                                                        setIsLangDropdownOpen(false);
                                                    }}
                                                    className={`w-full px-4 py-3 text-left text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-between ${selectedLanguage === 'py' ? 'text-pink-500' : 'text-slate-400'}`}
                                                >
                                                    PYTHON
                                                    {selectedLanguage === 'py' && <Check size={14} />}
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                            <p className="text-slate-500 font-medium">{lang === 'pt' ? 'Reforce seu conhecimento com testes rápidos.' : 'Strengthen your knowledge with quick tests.'}</p>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {chapters.map((chapter, idx) => (
                            <motion.div
                                key={chapter.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => handleSelectChapter(chapter.id)}
                                className={`group p-6 rounded-2xl border transition-all cursor-pointer ${currentQuizData[selectedLanguage]?.[chapter.id]
                                    ? 'bg-slate-900 border-slate-800 hover:border-pink-500/50 hover:bg-slate-900/80 shadow-xl'
                                    : 'bg-slate-900/30 border-slate-800/50 opacity-60'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-pink-500/10 rounded-xl">
                                        <ClipboardList className="text-pink-500" size={24} />
                                    </div>
                                    {currentQuizData[selectedLanguage]?.[chapter.id] && (
                                        <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest bg-pink-500/10 px-2 py-1 rounded">DISPONÍVEL</span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">{chapter.title}</h3>
                                <p className="text-slate-500 text-sm">{chapter.lessons.length} {lang === 'pt' ? 'lições concluídas' : 'lessons completed'}</p>

                                <div className="mt-8 flex items-center justify-between text-slate-400 group-hover:text-white transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-widest">
                                        {currentQuizData[selectedLanguage]?.[chapter.id] ? (lang === 'pt' ? 'Iniciar Teste' : 'Start Test') : (lang === 'pt' ? 'Em breve' : 'Coming soon')}
                                    </span>
                                    <ChevronRight size={18} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (isFinished) {
        const percentage = (score / currentQuiz.length) * 100;
        return (
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-950">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center shadow-2xl"
                >
                    <div className="w-24 h-24 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-pink-500/20">
                        <Award size={48} className="text-pink-500" />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2">{lang === 'pt' ? 'Parabéns!' : 'Congratulations!'}</h2>
                    <p className="text-slate-500 mb-8">{lang === 'pt' ? 'Você concluiu o questionário do capítulo.' : 'You have completed the chapter quiz.'}</p>

                    <div className="bg-slate-950/50 rounded-2xl p-6 mb-8 border border-white/5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-slate-400 text-sm">{lang === 'pt' ? 'Pontuação' : 'Score'}</span>
                            <span className="text-white font-black text-2xl">{score} / {currentQuiz.length}</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                className="h-full bg-pink-500"
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => setSelectedChapter(null)}
                        className="w-full py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={18} /> {lang === 'pt' ? 'Voltar aos Questionários' : 'Back to Quizzes'}
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-12 bg-slate-950 flex flex-col items-center">
            <div className="w-full max-w-3xl">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={() => setSelectedChapter(null)} className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <ChevronRight className="rotate-180" size={14} /> {lang === 'pt' ? 'Sair' : 'Exit'}
                        </button>
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Pergunta {currentQuestionIndex + 1} de {currentQuiz.length}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            className="h-full bg-pink-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestionIndex + 1) / currentQuiz.length) * 100}%` }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        className="space-y-8"
                    >
                        {currentQuestion ? (
                            <>
                                <h2 className="text-2xl font-bold text-white leading-tight">{currentQuestion.question}</h2>

                                {currentQuestion.type === 'code-selection' && (
                                    <div className="bg-[#011627] rounded-2xl p-6 border border-white/10 font-mono text-sm overflow-hidden relative shadow-2xl">
                                        <div className="space-y-1">
                                            {currentQuestion.code.split('\n').map((line, idx) => {
                                                const lineNum = idx + 1;
                                                const isSelected = selectedAnswer === String(lineNum);
                                                return (
                                                    <div
                                                        key={idx}
                                                        onClick={() => !feedback && setSelectedAnswer(String(lineNum))}
                                                        className={`flex gap-4 p-2 rounded cursor-pointer transition-all ${isSelected ? 'bg-blue-500/20 border-l-4 border-blue-500' : 'hover:bg-white/5'
                                                            }`}
                                                    >
                                                        <span className="text-slate-600 w-4 select-none">{lineNum}</span>
                                                        <span className="text-[#d6deeb]">{line.replace(/^\d+\s+/, '')}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {(currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'boolean') && (
                                    <div className="grid grid-cols-1 gap-4">
                                        {currentQuestion.options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => !feedback && setSelectedAnswer(idx)}
                                                className={`p-5 rounded-2xl border text-left flex items-center gap-4 transition-all group ${selectedAnswer === idx
                                                    ? 'bg-pink-500/10 border-pink-500 text-white'
                                                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-800'
                                                    }`}
                                            >
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${selectedAnswer === idx ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'
                                                    }`}>
                                                    {idx + 1}
                                                </div>
                                                <span className="font-medium">{option}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {currentQuestion.type === 'fill-in-the-gaps' && (
                                    <div className="space-y-8">
                                        <div className="bg-[#011627] rounded-2xl p-6 border border-white/10 font-mono text-sm shadow-2xl">
                                            <pre className="text-[#d6deeb]">
                                                {currentQuestion.code.split('__').map((part, i) => (
                                                    <React.Fragment key={i}>
                                                        {part}
                                                        {i < currentQuestion.gaps.length && (
                                                            <span className={`px-2 py-0.5 rounded border ${selectedGaps[i] !== undefined ? 'bg-pink-500/20 border-pink-500 text-pink-400' : 'bg-slate-800 border-slate-700 text-slate-500'
                                                                }`}>
                                                                {selectedGaps[i] !== undefined ? currentQuestion.gaps[i].options[selectedGaps[i]] : '____'}
                                                            </span>
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </pre>
                                        </div>

                                        <div className="space-y-6">
                                            {currentQuestion.gaps.map((gap, gapIdx) => (
                                                <div key={gapIdx} className="space-y-3">
                                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{gap.label}</span>
                                                    <div className="grid grid-cols-3 gap-3">
                                                        {gap.options.map((opt, optIdx) => (
                                                            <button
                                                                key={optIdx}
                                                                onClick={() => !feedback && handleGapSelection(gapIdx, optIdx)}
                                                                className={`p-3 rounded-xl border text-xs font-mono transition-all ${selectedGaps[gapIdx] === optIdx
                                                                    ? 'bg-pink-500/10 border-pink-500 text-white'
                                                                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                                                                    }`}
                                                            >
                                                                {opt}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center p-12 text-slate-500 italic">
                                {t.waiting_execution}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Feedback & Actions */}
                <div className="mt-12 h-24 flex items-center justify-between">
                    <div>
                        {feedback && (
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className={`flex items-center gap-2 font-bold ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}
                            >
                                {feedback === 'correct' ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                                {feedback === 'correct' ? t.quiz_correct : t.quiz_incorrect}
                            </motion.div>
                        )}
                        {feedback === 'incorrect' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 bg-slate-900/80 border border-slate-800 rounded-2xl max-w-2xl"
                            >
                                <div className="space-y-4">
                                    {currentQuestion.type === 'fill-in-the-gaps' ? (
                                        <div>
                                            <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest block mb-2">{t.correct_solution}</span>
                                            <div className="flex flex-wrap gap-2">
                                                {currentQuestion.gaps?.map((gap, idx) => (
                                                    <div key={idx} className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 text-xs font-mono">
                                                        <span className="text-slate-500 mr-2">{gap.label || `Gap ${idx + 1}`}:</span>
                                                        <span className="text-green-400 font-bold">{gap.options?.[gap.answer]}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest block mb-1">{t.correct_solution}</span>
                                            <p className="text-green-400 font-bold text-sm">
                                                {currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'boolean'
                                                    ? currentQuestion.options?.[currentQuestion.answer]
                                                    : currentQuestion.answer}
                                            </p>
                                        </div>
                                    )}

                                    {currentQuestion.explanation && (
                                        <div>
                                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-1">{t.explanation}</span>
                                            <p className="text-slate-300 text-sm leading-relaxed italic">
                                                "{currentQuestion.explanation}"
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {!feedback ? (
                        <button
                            onClick={checkAnswer}
                            disabled={
                                currentQuestion.type === 'fill-in-the-gaps'
                                    ? Object.keys(selectedGaps).length < currentQuestion.gaps.length
                                    : selectedAnswer === null
                            }
                            className="px-10 py-4 bg-white text-slate-900 font-black rounded-2xl shadow-xl hover:bg-slate-100 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            VERIFICAR
                        </button>
                    ) : (
                        <button
                            onClick={nextQuestion}
                            className="px-10 py-4 bg-pink-600 text-white font-black rounded-2xl shadow-xl hover:bg-pink-500 transition-all flex items-center gap-2 group"
                        >
                            {currentQuestionIndex < currentQuiz.length - 1 ? (lang === 'pt' ? 'PRÓXIMA' : 'NEXT') : (lang === 'pt' ? 'FINALIZAR' : 'FINISH')}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizView;
