"use client";

import React from 'react';
import { Trophy, Flame, Zap, Star, LayoutGrid, Clock, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import { dailyChallengesMetadata } from '@/data/daily_challenges_metadata';

const DailyChallengeView = ({ lang = 'pt', onSelectChallenge, selectedLanguage = 'js', dailyChallenges }) => {
    const t = translations[lang];

    const categories = [
        { id: 'basico', title: t.basic, color: 'bg-green-500', icon: Star, items: dailyChallenges.basico },
        { id: 'intermediario', title: t.intermediate, color: 'bg-yellow-500', icon: Zap, items: dailyChallenges.intermediario },
        { id: 'avancado', title: t.advanced, color: 'bg-red-500', icon: Trophy, items: dailyChallenges.avancado },
    ];

    return (
        <div className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-slate-950 p-6 lg:p-10">
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <Trophy size={28} className="text-yellow-500" />
                    <h1 className="text-3xl font-black text-white tracking-tight">{t.daily_challenge}</h1>
                </div>
                <p className="text-slate-400 font-bold max-w-2xl">
                    {t.daily_challenge_desc}
                </p>
            </header>

            <div className="grid grid-cols-1 gap-12">
                {categories.map((cat, idx) => (
                    <section key={cat.id} className="space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 ${cat.color} bg-opacity-10 rounded-xl flex items-center justify-center border border-${cat.color}/20`}>
                                    <cat.icon size={20} className={cat.color.replace('bg-', 'text-')} />
                                </div>
                                <h2 className="text-xl font-black text-white tracking-tight">{cat.title}</h2>
                            </div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{cat.items.length} {t.challenges}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cat.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (idx * 0.1) + (i * 0.02) }}
                                    onClick={() => {
                                        const title = item.includes(':') ? item.split(':')[0] : item;
                                        const description = item.includes(':') ? item.split(':')[1] : '';
                                        const metadata = dailyChallengesMetadata[selectedLanguage]?.[title] || {};

                                        onSelectChallenge({
                                            id: `${selectedLanguage}-daily-${cat.id}-${i}`,
                                            title: title,
                                            description: description,
                                            instructions: metadata.instructions || `Implemente o desafio: ${title}`,
                                            initialCode: metadata.initialCode || (selectedLanguage === 'js' ? "// Escreva seu código aqui\n" : "# Escreva seu código aqui\n"),
                                            solution: metadata.solution || "// Solução genérica para desafio diário",
                                            test: metadata.test || "output.length > 0"
                                        });
                                    }}
                                    className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 hover:border-blue-500/50 hover:bg-slate-900 transition-all cursor-pointer group flex flex-col justify-between h-40"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">#{String(i + 1).padStart(3, '0')}</span>
                                            <LayoutGrid size={14} className="text-slate-700 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-200 line-clamp-2 group-hover:text-white transition-colors">
                                            {item.includes(':') ? item.split(':')[0] : item}
                                        </h3>
                                        {item.includes(':') && (
                                            <p className="text-[10px] text-slate-500 mt-2 line-clamp-2">
                                                {item.split(':')[1]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-400 uppercase tracking-tighter">
                                            <Play size={10} className="fill-current" />
                                            Iniciar
                                        </div>
                                        <ChevronRight size={14} className="text-slate-700 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Bottom Info */}
            <div className="mt-12 bg-slate-900/20 border border-slate-800/50 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
                        <Flame size={24} className="text-orange-500 fill-orange-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">{t.keep_streak}</h4>
                        <p className="text-xs text-slate-500">{t.keep_streak_desc}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Clock size={16} />
                    {t.next_update} <span className="text-white font-black">12:34:56</span>
                </div>
            </div>
        </div>
    );
};

export default DailyChallengeView;
