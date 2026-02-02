"use client";

import React from 'react';
import { Flame, Diamond, Zap, ChevronRight, Trophy } from 'lucide-react';
import { translations } from '@/data/translations';

const RightSidebar = ({ lang = 'pt' }) => {
    const t = translations[lang];

    return (
        <div className="w-80 h-screen bg-slate-950 border-l border-slate-900 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-6">
            {/* Top Stats */}
            <div className="flex justify-between items-center bg-slate-900/30 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-1.5 rounded">JS</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Flame size={16} className="text-orange-500 fill-orange-500" />
                    <span className="text-sm font-bold">1</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Diamond size={16} className="text-blue-400 fill-blue-400" />
                    <span className="text-sm font-bold">40</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Zap size={16} className="text-indigo-400 fill-indigo-400" />
                    <span className="text-sm font-bold">1</span>
                </div>
            </div>


            {/* League Card */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-300">Iniciante Liga</h4>
                    <button className="text-[10px] text-blue-400 font-bold uppercase">Ver</button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                        <Trophy size={24} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs font-bold">Ranqueado <span className="text-red-500">#20</span></p>
                        <p className="text-[10px] text-slate-500">150 XP ganho esta semana</p>
                    </div>
                </div>
            </div>

            {/* Daily Goals */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-300">{t.daily_goals}</h4>
                    <button className="text-[10px] text-blue-400 font-bold uppercase">Ver</button>
                </div>
                <div className="flex flex-col gap-4">
                    <GoalItem label={t.xp_gain} progress={45} total={90} />
                    <GoalItem label={t.solve_challenges} progress={1} total={2} />
                </div>
            </div>

            {/* Journey Goals */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-300">{t.journey_goals}</h4>
                    <Trophy size={14} className="text-yellow-500" />
                </div>
                <div className="flex flex-col gap-4">
                    <GoalItem label={t.world1} progress={0} total={35} color="bg-orange-500" />
                    <GoalItem label={t.world2} progress={0} total={36} color="bg-yellow-400" />
                    <GoalItem label={t.world3} progress={0} total={44} color="bg-blue-500" />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                    <p className="text-[10px] text-slate-500 text-center italic">{t.success_quote}</p>
                </div>
            </div>
        </div>
    );
};

const GoalItem = ({ label, progress, total, color = "bg-green-500" }) => (
    <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-[10px] font-bold">
            <span className="text-slate-400">{label}</span>
            <span className="text-slate-500">{progress}/{total}</span>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
                className={`h-full ${color} transition-all duration-1000`}
                style={{ width: `${(progress / total) * 100}%` }}
            ></div>
        </div>
    </div>
);

export default RightSidebar;
