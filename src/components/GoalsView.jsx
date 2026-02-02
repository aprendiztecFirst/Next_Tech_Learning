"use client";

import React from 'react';
import { Target, Trophy, Flame, Zap, CheckCircle2, Circle, ArrowRight, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';

const GoalProgress = ({ label, progress, total, icon: Icon, color = "blue" }) => {
    const percentage = Math.min(100, (progress / total) * 100);
    const colorClasses = {
        blue: "bg-blue-500 shadow-blue-500/20",
        orange: "bg-orange-500 shadow-orange-500/20",
        yellow: "bg-yellow-500 shadow-yellow-500/20",
        green: "bg-green-500 shadow-green-500/20",
        indigo: "bg-indigo-500 shadow-indigo-500/20"
    };

    return (
        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all group">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]} bg-opacity-10 border border-${color}-500/20`}>
                        <Icon size={24} className={`text-${color}-500`} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">{label}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Progresso Atual</p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-xl font-black text-white">{progress}</span>
                    <span className="text-slate-600 font-bold ml-1">/ {total}</span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                    <span>{percentage.toFixed(0)}% Concluído</span>
                    <span>{total - progress} restantes</span>
                </div>
                <div className="h-3 w-full bg-slate-950 rounded-full border border-slate-800 p-0.5 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        className={`h-full rounded-full ${colorClasses[color]} shadow-lg`}
                    />
                </div>
            </div>
        </div>
    );
};

const GoalsView = ({ userData, lang = 'pt' }) => {
    const t = translations[lang];

    return (
        <div className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-slate-950 p-6 lg:p-10">
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <Target size={28} className="text-blue-500" />
                    <h1 className="text-3xl font-black text-white tracking-tight">{t.goals}</h1>
                </div>
                <p className="text-slate-400 font-bold max-w-2xl">
                    Acompanhe seu progresso diário e metas de longo prazo. Complete desafios para subir nas ligas e desbloquear novas conquistas!
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Trophy size={18} className="text-yellow-500" />
                        <h2 className="text-sm font-black text-slate-300 uppercase tracking-[0.2em]">{t.daily_goals}</h2>
                    </div>
                    <div className="space-y-4">
                        <GoalProgress
                            label={t.xp_gain}
                            progress={45}
                            total={90}
                            icon={Zap}
                            color="indigo"
                        />
                        <GoalProgress
                            label={t.solve_challenges}
                            progress={1}
                            total={2}
                            icon={Star}
                            color="yellow"
                        />
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Award size={18} className="text-orange-500" />
                        <h2 className="text-sm font-black text-slate-300 uppercase tracking-[0.2em]">{t.journey_goals}</h2>
                    </div>
                    <div className="space-y-4">
                        <GoalProgress
                            label={t.world1}
                            progress={0}
                            total={35}
                            icon={CheckCircle2}
                            color="orange"
                        />
                        <GoalProgress
                            label={t.world2}
                            progress={0}
                            total={36}
                            icon={CheckCircle2}
                            color="green"
                        />
                        <GoalProgress
                            label={t.world3}
                            progress={0}
                            total={44}
                            icon={CheckCircle2}
                            color="blue"
                        />
                    </div>
                </section>
            </div>

            {/* Motivation Card */}
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-blue-500/20 transition-all duration-700" />
                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-lg uppercase tracking-widest mb-4">Dica de Hoje</span>
                    <h3 className="text-2xl font-black text-white mb-4 italic">
                        {t.success_quote}
                    </h3>
                    <p className="text-slate-400 font-bold max-w-xl">
                        A consistência é o seu superpoder. Cada desafio resolvido hoje aproxima você de dominar o desenvolvimento de software para sempre.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GoalsView;
