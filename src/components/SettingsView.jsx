"use client";

import React, { useState } from 'react';
import { Globe, Moon, Bell, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';

const SettingsView = ({ interfaceLanguage = 'pt', setInterfaceLanguage }) => {
    const t = translations[interfaceLanguage];

    const languages = [
        { id: 'pt', label: 'Português', flag: '🇧🇷' },
        { id: 'en', label: 'English', flag: '🇺🇸' }
    ];

    return (
        <div className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-slate-950 p-10">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">{t.preferences}</h1>

                <div className="space-y-6">
                    {/* Language Section */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-slate-800 flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                                <Globe className="text-blue-500" size={24} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-white">{t.interface_language}</h2>
                                <p className="text-sm text-slate-500">{t.choose_language}</p>
                            </div>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.id}
                                    onClick={() => setInterfaceLanguage(lang.id)}
                                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${interfaceLanguage === lang.id
                                        ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{lang.flag}</span>
                                        <span className="font-bold">{lang.label}</span>
                                    </div>
                                    {interfaceLanguage === lang.id && (
                                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Other Mock Settings */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6">
                        <section className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500">
                                    <Moon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{t.dark_theme}</h3>
                                    <p className="text-xs text-slate-500">Mantenha a estética dark.</p>
                                </div>
                            </div>
                            <div className="w-12 h-6 bg-blue-600 rounded-full p-1 relative">
                                <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                            </div>
                        </section>

                        <section className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-yellow-600/20 rounded-xl flex items-center justify-center text-yellow-500">
                                    <Bell size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{t.notifications}</h3>
                                    <p className="text-xs text-slate-500">Avisos de novas aulas e conquistas.</p>
                                </div>
                            </div>
                            <div className="w-12 h-6 bg-slate-700 rounded-full p-1 relative">
                                <div className="w-4 h-4 bg-white rounded-full absolute left-1"></div>
                            </div>
                        </section>
                    </div>

                    <div className="pt-8 text-center">
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Next - App v1.0.0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
