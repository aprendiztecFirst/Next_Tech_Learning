"use client";

import React from 'react';
import { Trophy, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';

const LeaderboardView = ({ lang = 'pt' }) => {
    const t = translations[lang];

    const leaders = [
        { rank: 1, name: "Javier Dans", xp: 441, avatar: "https://i.pravatar.cc/100?u=javier" },
        { rank: 2, name: "kainser2008", xp: 423, avatar: "https://i.pravatar.cc/100?u=kainser" },
        { rank: 3, name: "casen0425", xp: 413, avatar: "https://i.pravatar.cc/100?u=casen" },
        { rank: 4, name: "vvp89216356173spb1", xp: 258, avatar: "https://i.pravatar.cc/100?u=vvp" },
        { rank: 5, name: "Usuário Privado", xp: 231, avatar: "https://i.pravatar.cc/100?u=private" },
        { rank: 6, name: "22waip54", xp: 231, avatar: "https://i.pravatar.cc/100?u=waip" },
        { rank: 7, name: "nedolia", xp: 231, avatar: "https://i.pravatar.cc/100?u=nedolia" },
    ];

    return (
        <div className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-slate-950 flex flex-col items-center py-10">
            <div className="w-full max-w-xl px-6">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">{t.leaderboard}</h1>
                    <p className="text-slate-500 text-sm font-bold mt-2">Liga Iniciante • Termina em 2d 14h</p>
                </header>

                <div className="space-y-2">
                    {leaders.map((user) => (
                        <motion.div
                            key={user.rank}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: user.rank * 0.05 }}
                            className="flex items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/50 rounded-2xl border border-white/5 transition-all group"
                        >
                            <div className="flex items-center gap-6">
                                {/* Rank Icon/Number */}
                                <div className="w-10 flex justify-center">
                                    {user.rank <= 3 ? (
                                        <div
                                            className={`w-8 h-8 flex items-center justify-center font-black text-slate-900 text-sm shadow-lg ${user.rank === 1 ? 'bg-yellow-500' : user.rank === 2 ? 'bg-slate-300' : 'bg-orange-600'
                                                }`}
                                            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                                        >
                                            {user.rank}
                                        </div>
                                    ) : (
                                        <span className="text-lg font-black text-white/40">{user.rank}</span>
                                    )}
                                </div>

                                {/* User Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-800 bg-slate-800 p-0.5 overflow-hidden">
                                        <img src={user.avatar} alt="" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{user.name}</span>
                                </div>
                            </div>

                            {/* XP */}
                            <div className="text-right">
                                <span className="text-lg font-black text-blue-400 font-mono italic">{user.xp} <span className="text-[10px] uppercase tracking-widest text-blue-500/50">XP</span></span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Promotion Zone */}
                <div className="mt-10 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 text-green-500 font-black text-sm uppercase tracking-[0.2em] animate-pulse">
                        <ChevronUp size={20} className="fill-current" />
                        <span>{lang === 'en' ? 'Promotion Zone' : 'Zona de promoção'}</span>
                        <ChevronUp size={20} className="fill-current" />
                    </div>
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardView;
