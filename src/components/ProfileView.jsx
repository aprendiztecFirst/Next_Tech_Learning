"use client";

import React, { useState } from 'react';
import {
    Plus, Edit2, Flame, Diamond, Zap,
    Trophy, Award, Users, Search,
    UserPlus, Settings, ExternalLink,
    Instagram, Facebook, Linkedin, Twitter, Youtube, Github,
    Check, X
} from 'lucide-react';
import { motion } from 'framer-motion';

import { translations } from '@/data/translations';

const ProfileView = ({ userData, onUpdateUser, lang = 'pt' }) => {
    const t = translations[lang];
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        name: userData.name,
        username: userData.username,
        bio: userData.bio
    });

    const handleSave = () => {
        onUpdateUser(editForm);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditForm({
            name: userData.name,
            username: userData.username,
            bio: userData.bio
        });
        setIsEditing(false);
    };

    return (
        <div className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-slate-950 flex flex-col md:flex-row">
            {/* Left Content - Main Profile */}
            <div className="flex-1 p-6 lg:p-10 space-y-8">
                {/* Header Section */}
                <div className="relative">
                    {/* Cover Photo */}
                    <div className="h-48 w-full bg-[#1a7fa0] rounded-3xl relative overflow-hidden group">
                        <button className="absolute top-4 left-4 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all">
                            <Plus className="text-white" size={20} />
                        </button>
                        <button className="absolute bottom-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all">
                            <Edit2 className="text-white" size={16} />
                        </button>
                    </div>

                    {/* Profile Picture Placeholder */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-32 h-32 lg:w-40 lg:h-40 bg-slate-900 border-8 border-slate-950 rounded-full flex items-center justify-center group">
                        <div className="w-full h-full rounded-full border-4 border-dashed border-slate-700 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                            <Plus size={40} className="text-slate-700 group-hover:text-blue-500 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* User Info */}
                <div className="pt-16 text-center space-y-3">
                    {isEditing ? (
                        <div className="max-w-xs mx-auto space-y-3">
                            <input
                                type="text"
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white font-bold text-center focus:outline-none focus:border-blue-500"
                                value={editForm.name}
                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                placeholder="Nome"
                            />
                            <input
                                type="text"
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-400 font-bold text-sm text-center focus:outline-none focus:border-blue-500"
                                value={editForm.username}
                                onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                                placeholder="Nome de usuário"
                            />
                            <textarea
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-slate-400 text-sm text-center focus:outline-none focus:border-blue-500 resize-none h-20"
                                value={editForm.bio}
                                onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                                placeholder="Sua biografia..."
                            />
                            <div className="flex gap-2 justify-center">
                                <button onClick={handleSave} className="p-2 bg-green-600 hover:bg-green-500 rounded-lg text-white">
                                    <Check size={18} />
                                </button>
                                <button onClick={handleCancel} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-white">{userData.name}</h2>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="text-sm font-bold text-slate-500 border-b border-dashed border-slate-700 hover:text-slate-300 transition-colors"
                            >
                                {userData.username || "Adicionar nome de usuário"}
                            </button>
                            <p className="text-sm text-slate-400 max-w-sm mx-auto">{userData.bio}</p>
                        </>
                    )}

                    <div className="flex justify-center gap-6 text-sm font-bold pt-2">
                        <span className="text-slate-400">{userData.following} <span className="text-slate-600">{t.following}</span></span>
                        <span className="text-slate-400">{userData.followers} <span className="text-slate-600">{t.followers}</span></span>
                    </div>
                </div>

                {/* Main Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StatCard icon={<Flame className="text-orange-500 fill-orange-500" />} val={userData.streak} label={t.streak} />
                    <StatCard icon={<div className="text-blue-400 font-bold">XP</div>} val={userData.xp} label={t.total_xp} />
                    <StatCard icon={<div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center"><Trophy size={16} className="text-white" /></div>} val={userData.league} label={t.current_league} />
                </div>

                {/* Badges Section */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Badges</h3>
                    <div className="space-y-4">
                        <BadgeItem
                            icon={<Award className="text-slate-500" />}
                            title="Perfil Básico"
                            desc="Biografia adicionada ao perfil"
                            progress={userData.bio !== 'Futuro desenvolvedor tech!' ? 3 : 0}
                            total={3}
                            active={userData.bio !== 'Futuro desenvolvedor tech!'}
                        />
                        <BadgeItem
                            icon={<Zap className="text-blue-400 fill-blue-400" />}
                            title="O Início"
                            desc="Resolveu 5 problemas de programação"
                            progress={Math.min(5, Math.floor(userData.xp / 100))}
                            total={5}
                            active={userData.xp >= 100}
                        />
                        <BadgeItem
                            icon={<Award className="text-slate-500" />}
                            title="Programador Diário"
                            desc="Manteve uma sequência de 5 dias"
                            progress={userData.streak}
                            total={5}
                            active={userData.streak >= 1}
                        />
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Profile Specific */}
            <div className="w-full md:w-80 p-6 space-y-6 border-l border-slate-900 bg-slate-950 flex flex-col custom-scrollbar">
                {/* Top Currency Stats */}
                <div className="flex justify-between items-center bg-slate-900/30 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Flame size={16} className="text-orange-500 fill-orange-500" />
                        <span className="text-sm font-bold">{userData.streak}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Diamond size={16} className="text-blue-400 fill-blue-400" />
                        <span className="text-sm font-bold">{userData.gems}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Zap size={16} className="text-indigo-400 fill-indigo-400" />
                        <span className="text-sm font-bold">1</span>
                    </div>
                </div>

                {/* Actions Section */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 space-y-4">
                    <h4 className="text-sm font-bold text-slate-400">{t.actions || 'Ações'}</h4>
                    <div className="space-y-4">
                        <ActionItem onClick={() => setIsEditing(true)} icon={<Edit2 size={18} />} label={t.edit_profile} />
                        <ActionItem icon={<ExternalLink size={18} />} label={t.public_profile} />
                        <ActionItem icon={<Settings size={18} />} label={t.preferences} />
                    </div>
                </div>

                {/* Socialize Section */}
                <div className="bg-slate-900/50 border-2 border-blue-500/30 rounded-3xl p-5 space-y-4">
                    <h4 className="text-sm font-bold text-slate-400">{t.socialize}</h4>
                    <div className="space-y-4">
                        <ActionItem icon={<Search size={18} />} label={t.find_friends} />
                        <ActionItem icon={<UserPlus size={18} />} label={t.refer_friend} extraIcon={<Diamond size={12} className="text-yellow-500 fill-yellow-500" />} />
                    </div>
                </div>

                {/* Footer and Social Icons */}
                <div className="pt-4 mt-auto border-t border-slate-900 text-center space-y-6">
                    <div className="grid grid-cols-3 gap-y-2 gap-x-1 text-[10px] font-bold text-slate-500">
                        <button className="hover:text-slate-300">Sobre</button>
                        <button className="hover:text-slate-300">Certificações</button>
                        <button className="hover:text-slate-300">Afiliado</button>
                        <button className="hover:text-slate-300">Empresas</button>
                        <button className="hover:text-slate-300">Blog</button>
                        <button className="hover:text-slate-300">Contato</button>
                        <button className="hover:text-slate-300">Privacidade</button>
                        <button className="hover:text-slate-300">Termos</button>
                    </div>
                    <div className="flex justify-center gap-4 text-slate-600">
                        <Instagram size={16} className="hover:text-slate-400 cursor-pointer" />
                        <Facebook size={16} className="hover:text-slate-400 cursor-pointer" />
                        <Linkedin size={16} className="hover:text-slate-400 cursor-pointer" />
                        <Twitter size={16} className="hover:text-slate-400 cursor-pointer" />
                        <Youtube size={16} className="hover:text-slate-400 cursor-pointer" />
                        <Github size={16} className="hover:text-slate-400 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, val, label }) => (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <p className="text-xl font-bold text-white">{val}</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
        </div>
    </div>
);

const BadgeItem = ({ icon, title, desc, progress, total, active = false }) => (
    <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center relative ${active ? 'bg-blue-600/10 border-2 border-blue-500' : 'bg-slate-800/50 border border-slate-700'}`}>
            <div className={active ? '' : 'opacity-30 grayscale'}>
                {icon}
            </div>
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold text-white">{title}</h4>
                <span className="text-[10px] font-bold text-slate-500">{progress}/{total}</span>
            </div>
            <p className="text-[10px] text-slate-500 mb-2">{desc}</p>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                    className={`h-full ${active ? 'bg-blue-500' : 'bg-slate-700'} transition-all`}
                    style={{ width: `${(progress / total) * 100}%` }}
                ></div>
            </div>
        </div>
    </div>
);

const ActionItem = ({ icon, label, extraIcon, onClick }) => (
    <button onClick={onClick} className="w-full flex items-center justify-between text-slate-300 hover:text-white transition-all group">
        <div className="flex items-center gap-3">
            <div className="text-slate-500 group-hover:text-blue-400 transition-colors">
                {icon}
            </div>
            <span className="text-xs font-bold">{label}</span>
        </div>
        {extraIcon && <div className="flex items-center gap-1"><Plus size={10} className="text-yellow-500" />{extraIcon}</div>}
    </button>
);

export default ProfileView;
