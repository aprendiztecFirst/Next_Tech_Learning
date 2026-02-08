"use client";

import React from 'react';
import {
    Check, Lock, Trophy, ChevronLeft, Star, Brain, Flag, CircuitBoard,
    MessageSquare, Power, Lightbulb, Settings, User, Heart, Gamepad2,
    Medal, Target, Zap, Sparkles, Rocket, Code
} from 'lucide-react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';

const Node = ({ lesson, index, isActive, onClick, t, isLastInCourse }) => {
    // Determine icon based on position/index
    const getIcon = () => {
        // Status determination
        const isCompleted = lesson.completed;
        const isStarted = lesson.started && !isCompleted;

        // Cycle through icons from the reference image style
        const icons = [
            MessageSquare, Power, Lightbulb, Star, Settings,
            User, Heart, Gamepad2, Medal, Target,
            Zap, Sparkles, Rocket, Code, Brain
        ];

        const IconComp = icons[index % icons.length];

        // Colors from reference image
        const colors = [
            'text-blue-400', 'text-red-400', 'text-yellow-400', 'text-green-400', 'text-purple-400',
            'text-orange-400', 'text-cyan-400', 'text-pink-400', 'text-indigo-400', 'text-amber-400'
        ];
        const baseColor = colors[index % colors.length];

        const iconColor = isActive ? 'text-white' :
            isCompleted ? 'text-white' :
                isStarted ? baseColor : 'text-slate-500';

        return (
            <div className="relative flex items-center justify-center">
                <IconComp size={isActive ? 24 : 20} className={`${iconColor} ${isCompleted ? 'opacity-100' : 'opacity-80'} transition-all`} />
                {isCompleted && (
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5 border border-slate-900">
                        <Check size={8} className="text-white stroke-[4]" />
                    </div>
                )}
            </div>
        );
    };

    // Zig-zag offset with tighter values to match image
    const xOffset = Math.sin(index * 1.5) * 40;

    return (
        <div
            className="flex flex-col items-center relative z-10 my-6"
            style={{ transform: `translateX(${xOffset}px)` }}
        >
            <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
            >
                {/* Hexagon Shape Container */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onClick(lesson.id)}
                    className={`w-20 h-22 flex items-center justify-center relative transition-all group ${isActive ? 'drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''
                        }`}
                    style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        backgroundColor: isActive ? "#2563eb" :
                            lesson.completed ? "#059669" :
                                lesson.started ? "#ca8a04" : "#1e293b",
                    }}
                >
                    {/* Inner Hexagon Border Effect */}
                    <div
                        className="absolute inset-[2px] bg-[#0f172a] group-hover:bg-[#1e293b] transition-colors"
                        style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            backgroundColor: isActive ? "#1e40af" :
                                lesson.completed ? "#064e3b" :
                                    lesson.started ? "#854d0e" : "#111827",
                        }}
                    />

                    <div className={`relative z-10 ${isActive ? 'text-white' : lesson.completed ? 'text-green-400' : 'text-slate-500'}`}>
                        {getIcon()}
                    </div>
                </motion.button>

                {/* Active Indicator Label */}
                {isActive && (
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-xl shadow-2xl whitespace-nowrap z-50 animate-bounce">
                        {t.start}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white"></div>
                    </div>
                )}
            </motion.div>

            <span className={`mt-4 text-[11px] font-black uppercase tracking-widest text-center max-w-[120px] transition-colors ${isActive ? 'text-blue-400' : 'text-slate-600'}`}>
                {lesson.title}
            </span>
        </div>
    );
};

const JourneyMap = ({ courses, activeCourse, currentLessonId, onSelectLesson, selectedLanguage, onLanguageChange, userData, lang = 'pt' }) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const t = translations[lang];

    return (
        <div className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-slate-950 flex flex-col items-center py-10 relative">
            {/* Language Selector & Course Header */}
            <div className="w-full max-w-lg mb-12 px-6 sticky top-0 z-50">
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-slate-700 transition-colors border border-slate-700"
                            >
                                <img src={selectedLanguage === 'js' ? "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" : "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"} alt="" className="w-4 h-4 object-contain" />
                                {selectedLanguage === 'js' ? 'JavaScript' : 'Python'}
                                <ChevronLeft className={isDropdownOpen ? 'rotate-90 transition-transform' : '-rotate-90 transition-transform'} size={14} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-[60]">
                                    <button
                                        onClick={() => { onLanguageChange('js'); setIsDropdownOpen(false); }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700 text-sm font-medium transition-colors border-b border-slate-700"
                                    >
                                        <div className="w-6 h-6 bg-yellow-500/10 rounded flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-yellow-500">JS</span>
                                        </div>
                                        JavaScript
                                    </button>
                                    <button
                                        onClick={() => { onLanguageChange('py'); setIsDropdownOpen(false); }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700 text-sm font-medium transition-colors"
                                    >
                                        <div className="w-6 h-6 bg-blue-500/10 rounded flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-blue-500">PY</span>
                                        </div>
                                        Python
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-right flex flex-col items-end">
                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{t.student}</span>
                                <span className="text-sm font-black text-white">{userData?.name || t.student}</span>
                            </div>
                            <div className="flex -space-x-2">

                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden shadow-lg">
                                        <img src={`https://i.pravatar.cc/100?u=${i + 15}`} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                            <Trophy size={20} className="text-blue-500" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{activeCourse.title.split(' - ')[0]}</p>
                            <h2 className="text-lg font-bold text-white leading-tight">{activeCourse.title.split(' - ')[1] || activeCourse.title}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center relative w-full max-w-sm px-4">
                {courses.map((course, cIndex) => (
                    <React.Fragment key={course.id}>
                        <div className="w-full flex items-center gap-4 my-10 z-10">
                            <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-slate-800"></div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                                {course.title}
                            </span>
                            <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-slate-800"></div>
                        </div>

                        {/* Vertical line connector - Industrial style */}
                        {cIndex === 0 && (
                            <div className="w-2 bg-slate-800 absolute top-20 bottom-0 left-1/2 -translate-x-1/2 z-0 opacity-40"></div>
                        )}

                        {course.lessons.map((lesson, lIndex) => (
                            <Node
                                key={lesson.id}
                                lesson={lesson}
                                index={lIndex + (cIndex * 5)}
                                isActive={lesson.id === currentLessonId}
                                onClick={(lId) => onSelectLesson(lId, course.id)}
                                t={t}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>

            {/* Floating Action Button for Down Scroll */}
            <div className="mt-20 mb-10">
                <button className="bg-slate-800 p-4 rounded-full border border-slate-700 shadow-2xl text-slate-400 hover:text-white transition-all transform hover:translate-y-1 hover:scale-110">
                    <ChevronLeft className="-rotate-90" />
                </button>
            </div>
        </div>
    );
};

export default JourneyMap;
