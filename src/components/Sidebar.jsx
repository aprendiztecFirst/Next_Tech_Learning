"use client";

import React from 'react';
import {
  Map,
  Dumbbell,
  Target,
  Trophy,
  User,
  Settings,
  Sparkles,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { supabase } from '@/lib/supabase';


import { translations } from '@/data/translations';

const SidebarItem = ({ icon: Icon, label, active = false, onClick, color = "text-blue-400" }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${active ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
      }`}
  >
    <div className={`transition-all ${active ? color : `${color} opacity-40 group-hover:opacity-80`}`}>
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <span className="font-bold text-[14px]">{label}</span>
  </button>
);

const Sidebar = ({ currentView, onViewChange, onLogout, lang = 'pt' }) => {
  const t = translations[lang];

  return (
    <div className="hidden md:flex w-64 h-screen bg-slate-950 border-r border-slate-900 flex flex-col p-4 gap-2">
      <div className="flex items-center gap-3 px-4 mb-8">
        <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
          <img src="/icon-512x512.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Next - App</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        <SidebarItem
          icon={Map}
          label={t.journey}
          active={currentView === 'journey'}
          onClick={() => onViewChange('journey')}
          color="text-green-500"
        />
        <SidebarItem
          icon={Dumbbell}
          label={t.daily_challenge}
          active={currentView === 'daily_challenge'}
          onClick={() => onViewChange('daily_challenge')}
          color="text-orange-500"
        />
        <SidebarItem
          icon={Target}
          label={t.goals}
          active={currentView === 'goals'}
          onClick={() => onViewChange('goals')}
          color="text-red-500"
        />
        <SidebarItem
          icon={Trophy}
          label={t.leaderboard}
          active={currentView === 'leaderboard'}
          onClick={() => onViewChange('leaderboard')}
          color="text-yellow-500"
        />
        <hr className="my-2 border-slate-900" />

        <SidebarItem
          icon={Sparkles}
          label={t.fased_challenges}
          active={currentView === 'worlds'}
          onClick={() => onViewChange('worlds')}
          color="text-cyan-400"
        />

        <SidebarItem
          icon={User}
          label={t.profile}
          active={currentView === 'profile'}
          onClick={() => onViewChange('profile')}
          color="text-purple-500"
        />
        <SidebarItem
          icon={Settings}
          label={t.preferences}
          active={currentView === 'settings'}
          onClick={() => onViewChange('settings')}
          color="text-blue-500"
        />
        <hr className="my-2 border-slate-900" />
        <SidebarItem
          icon={LogOut}
          label={t.logout || (lang === 'pt' ? 'Sair' : 'Logout')}
          onClick={onLogout}
          color="text-slate-400"
        />



      </nav>
    </div>
  );
};

export default Sidebar;
