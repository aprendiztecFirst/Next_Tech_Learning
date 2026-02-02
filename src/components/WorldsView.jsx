"use client";

import React from 'react';
import { Globe, Lock, ShieldCheck, Zap, Star, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';

const WorldCard = ({ id, title, description, level, locked, onClick }) => (
    <motion.button
        whileHover={!locked ? { scale: 1.02, translateY: -5 } : {}}
        whileTap={!locked ? { scale: 0.98 } : {}}
        onClick={!locked ? () => onClick(id) : undefined}
        className={`w-full max-w-sm p-6 rounded-3xl border text-left transition-all relative overflow-hidden group ${locked
            ? 'bg-slate-900/50 border-slate-800 opacity-60 grayscale cursor-not-allowed'
            : 'bg-slate-900 border-slate-800 hover:border-blue-500/50 shadow-xl hover:shadow-blue-500/10'
            }`}
    >
        <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity ${level === 'BÁSICO' ? 'bg-green-500' : level === 'INTERMEDIÁRIO' ? 'bg-blue-500' : 'bg-purple-500'
            }`}></div>

        <div className="flex items-start justify-between mb-8">
            <div className={`p-4 rounded-2xl shadow-lg ${level === 'BÁSICO' ? 'bg-green-600 shadow-green-600/20' :
                level === 'INTERMEDIÁRIO' ? 'bg-blue-600 shadow-blue-600/20' :
                    'bg-purple-600 shadow-purple-600/20'
                }`}>
                <Globe size={32} className="text-white" />
            </div>
            {locked ? (
                <div className="bg-slate-800 p-2 rounded-full text-slate-500">
                    <Lock size={18} />
                </div>
            ) : (
                <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                        <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                </div>
            )}
        </div>

        <div className="relative">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${level === 'BÁSICO' ? 'bg-green-500/10 text-green-500' :
                level === 'INTERMEDIÁRIO' ? 'bg-blue-500/10 text-blue-500' :
                    'bg-purple-500/10 text-purple-500'
                }`}>
                {level}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                {description}
            </p>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                    <Zap size={14} className="text-indigo-400" />
                    <span className="text-[10px] font-bold text-slate-300">Acesse para ver os desafios</span>
                </div>
                <div className="h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${locked ? 'bg-slate-700' : 'bg-blue-500'} w-20 transition-all duration-1000`}></div>
                </div>
            </div>
        </div>
    </motion.button>
);

const ChallengesList = ({ world, onBack, onSelectChallenge, selectedLanguage }) => (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase mb-4">
            <ChevronLeft size={18} /> Voltar para Mundos
        </button>
        <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2">{world.title}</h2>
            <p className="text-slate-500 text-sm">Escolha uma fase para começar o desafio {selectedLanguage === 'js' ? 'JavaScript' : 'Python'}.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {world.challenges.map(ch => (
                <motion.button
                    key={ch.id}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => onSelectChallenge(ch)}
                    className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 text-left transition-all"
                >
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{ch.id}</span>
                        <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center">
                            <Zap size={16} className="text-blue-500" />
                        </div>
                    </div>
                    <h4 className="font-bold text-slate-200 mb-2 truncate">{ch.title}</h4>
                    <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{ch.description}</p>
                </motion.button>
            ))}
        </div>
    </div>
);

const WorldsView = ({ challengesData, onSelectChallenge, selectedLanguage, onLanguageChange, lang = 'pt' }) => {
    const [selectedWorldId, setSelectedWorldId] = React.useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const t = translations[lang];

    const worlds = [
        {
            id: 'world1',
            title: selectedLanguage === 'js' ? 'Mundo 1: Básico' : `Mundo 1: O Início (${selectedLanguage.toUpperCase()})`,
            description: selectedLanguage === 'js' ? 'Variáveis, condicionais, loops e funções fundamentais.' : 'Domine a sintaxe básica e o pensamento lógico fundamental.',
            level: 'BÁSICO', locked: false, challenges: challengesData?.[selectedLanguage]?.world1 || []
        },
        {
            id: 'world2',
            title: selectedLanguage === 'js' ? 'Mundo 2: Intermediário' : `Mundo 2: Estruturas (${selectedLanguage.toUpperCase()})`,
            description: selectedLanguage === 'js' ? 'Arrow functions, Map, Filter, Reduce e manipulação do DOM.' : 'Aprofunde-se em arrays, objetos e manipulação de dados.',
            level: 'INTERMEDIÁRIO', locked: false, challenges: challengesData?.[selectedLanguage]?.world2 || []
        },
        {
            id: 'world3',
            title: selectedLanguage === 'js' ? 'Mundo 3: Avançado' : `Mundo 3: Maestria (${selectedLanguage.toUpperCase()})`,
            description: selectedLanguage === 'js' ? 'Promises, Async/Await, Fetch API, Destructuring e Classes.' : 'Implemente algoritmos avançados e estruturas de dados complexas.',
            level: 'AVANÇADO', locked: false, challenges: challengesData?.[selectedLanguage]?.world3 || []
        }
    ];

    const selectedWorld = worlds.find(w => w.id === selectedWorldId);

    return (
        <div className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-slate-950 p-12 pt-16">
            <div className="max-w-6xl mx-auto">
                {!selectedWorldId ? (
                    <>
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-extrabold text-white mb-2">Desafio por Fases</h2>
                                <p className="text-slate-500 text-sm">Supere os obstáculos de cada mundo para se tornar um mestre.</p>
                            </div>

                            {/* Language Selector Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-2 bg-slate-900 px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:bg-slate-800 transition-all border border-slate-800 shadow-xl"
                                >
                                    <img src={selectedLanguage === 'js' ? "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" : "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"} alt="" className="w-4 h-4 object-contain" />
                                    {selectedLanguage === 'js' ? 'JavaScript' : 'Python'}
                                    <ChevronLeft className={isDropdownOpen ? 'rotate-90 transition-transform' : '-rotate-90 transition-transform'} size={14} />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-[60]">
                                        <button
                                            onClick={() => { onLanguageChange('js'); setIsDropdownOpen(false); }}
                                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-sm font-medium transition-colors border-b border-slate-800"
                                        >
                                            <div className="w-6 h-6 bg-yellow-500/10 rounded flex items-center justify-center">
                                                <span className="text-[10px] font-bold text-yellow-500">JS</span>
                                            </div>
                                            JavaScript
                                        </button>
                                        <button
                                            onClick={() => { onLanguageChange('py'); setIsDropdownOpen(false); }}
                                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-sm font-medium transition-colors"
                                        >
                                            <div className="w-6 h-6 bg-blue-500/10 rounded flex items-center justify-center">
                                                <span className="text-[10px] font-bold text-blue-500">PY</span>
                                            </div>
                                            Python
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {worlds.map(world => (
                                <WorldCard key={world.id} {...world} onClick={setSelectedWorldId} />
                            ))}
                        </div>
                    </>
                ) : (
                    <ChallengesList
                        world={selectedWorld}
                        onBack={() => setSelectedWorldId(null)}
                        onSelectChallenge={onSelectChallenge}
                        selectedLanguage={selectedLanguage}
                    />
                )}
            </div>
        </div>
    );
};

export default WorldsView;
