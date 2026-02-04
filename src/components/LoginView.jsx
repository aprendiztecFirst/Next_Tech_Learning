"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';


const LoginView = ({ onLogin, lang = 'pt' }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (!supabase) {
            setError(lang === 'pt'
                ? 'Configuração do Supabase ausente. Verifique se as variáveis no Vercel começam com NEXT_PUBLIC_'
                : 'Supabase configuration missing. Ensure Vercel variables start with NEXT_PUBLIC_');
            setIsLoading(false);
            return;
        }

        try {

            if (isLogin) {
                const { data, error: authError } = await supabase.auth.signInWithPassword({
                    email: formData.email,
                    password: formData.password,
                });

                if (authError) throw authError;
                onLogin(data.user);
            } else {
                const { data, error: authError } = await supabase.auth.signUp({
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            full_name: formData.name,
                        }
                    }
                });

                if (authError) throw authError;

                if (data.user) {
                    alert(lang === 'pt' ? 'Conta criada com sucesso! Verifique seu e-mail.' : 'Account created successfully! Please check your email.');
                    setIsLogin(true);
                }
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse decoration-delay-2000" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Logo Area */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 bg-slate-900 rounded-[1.5rem] flex items-center justify-center mb-4 shadow-2xl shadow-blue-500/20 rotate-3 overflow-hidden border-2 border-white/10">
                        <img src="/icon-512x512.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-3xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Next - App
                    </h1>
                    <p className="text-slate-500 font-bold text-sm mt-2">
                        {isLogin ? 'Bem-vindo de volta, futuro dev!' : 'Comece sua jornada tech hoje!'}
                    </p>
                </div>

                {/* Glass Card */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        {/* Mode Toggle */}
                        <div className="flex bg-slate-950/50 p-1 rounded-xl mb-8 border border-white/5">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-2 text-xs font-black rounded-lg transition-all ${isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                LOGIN
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-2 text-xs font-black rounded-lg transition-all ${!isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                CADASTRO
                            </button>
                        </div>

                        {error && (
                            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500 text-xs font-bold text-center">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <AnimatePresence mode="wait">
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-2"
                                    >
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nome Completo</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Como devemos te chamar?"
                                                className="w-full bg-slate-950/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">E-mail Estudantil</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <input
                                        type="email"
                                        required
                                        placeholder="nome@exemplo.com"
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Senha</label>
                                    {isLogin && <button type="button" className="text-[10px] font-black text-blue-500 hover:text-blue-400">Esquecí a senha</button>}
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full bg-slate-950/50 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-950/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-6 overflow-hidden relative group"
                            >
                                {isLoading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        <span>{isLogin ? 'ENTRAR' : 'CRIAR MINHA CONTA'}</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Social Login */}
                        <div className="mt-8">
                            <div className="relative flex items-center mb-6">
                                <div className="flex-1 border-t border-white/5"></div>
                                <span className="px-4 text-[10px] font-black text-slate-600 uppercase">Ou continue com</span>
                                <div className="flex-1 border-t border-white/5"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl py-3 text-slate-300 transition-all">
                                    <Github size={20} />
                                    <span className="text-xs font-bold">Github</span>
                                </button>
                                <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl py-3 text-slate-300 transition-all">
                                    <Chrome size={20} />
                                    <span className="text-xs font-bold">Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-8 text-center flex items-center justify-center gap-2 text-slate-500">
                    <ShieldCheck size={16} />
                    <p className="text-[10px] font-black uppercase tracking-widest">
                        Ambiente Seguro & Criptografado
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginView;
