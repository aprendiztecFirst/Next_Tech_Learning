"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, ArrowLeft } from 'lucide-react';

const LogoutView = ({ onBackToLogin, lang = 'pt' }) => {
    const content = {
        pt: {
            title: "Sessão Encerrada",
            message: "Você saiu com sucesso. Esperamos te ver de volta em breve para continuar sua jornada tech!",
            button: "Voltar para o Login"
        },
        en: {
            title: "Logged Out",
            message: "You have successfully logged out. We hope to see you back soon to continue your tech journey!",
            button: "Back to Login"
        }
    };

    const t = content[lang] || content.pt;

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl text-center relative overflow-hidden"
            >
                {/* Decorative background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-600/20 blur-[80px] -z-10 rounded-full"></div>

                <div className="mb-8 relative inline-block">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, delay: 0.2 }}
                        className="w-24 h-24 bg-blue-600/10 rounded-3xl flex items-center justify-center border border-blue-500/20 mx-auto"
                    >
                        <LogOut size={42} className="text-blue-500" />
                    </motion.div>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-black text-white mb-4 tracking-tight"
                >
                    {t.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-400 mb-10 leading-relaxed"
                >
                    {t.message}
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onBackToLogin}
                    className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3"
                >
                    <ArrowLeft size={18} />
                    {t.button}
                </motion.button>
            </motion.div>
        </div>
    );
};

export default LogoutView;
