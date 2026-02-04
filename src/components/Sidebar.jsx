"use client";

import React from 'react';
import {
  Home,
  Trophy,
  Target,
  TrendingUp,
  User,
  MoreHorizontal,
  ChevronRight,
  Sparkles,
  LogOut
} from 'lucide-react';
import { supabase } from '@/lib/supabase';


import { translations } from '@/data/translations';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${active ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
      }`}
  >
    <Icon size={22} className={active ? 'text-blue-400' : ''} />
    <span className="font-bold text-[14px]">{label}</span>
  </button>
);

const Sidebar = ({ currentView, onViewChange, onLogout, lang = 'pt' }) => {
  const t = translations[lang];

  return (
    <div className="hidden md:flex w-64 h-screen bg-slate-950 border-r border-slate-900 flex flex-col p-4 gap-2">
      <div className="flex items-center gap-2 px-4 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">N</div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Next - App</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        <SidebarItem
          icon={Home}
          label={t.journey}
          active={currentView === 'journey'}
          onClick={() => onViewChange('journey')}
        />
        <SidebarItem
          icon={Trophy}
          label={t.daily_challenge}
          active={currentView === 'daily_challenge'}
          onClick={() => onViewChange('daily_challenge')}
        />
        <SidebarItem
          icon={Target}
          label={t.goals}
          active={currentView === 'goals'}
          onClick={() => onViewChange('goals')}
        />
        <SidebarItem
          icon={TrendingUp}
          label={t.leaderboard}
          active={currentView === 'leaderboard'}
          onClick={() => onViewChange('leaderboard')}
        />
        <hr className="my-2 border-slate-900" />

        <SidebarItem
          icon={Sparkles}
          label={t.fased_challenges}
          active={currentView === 'worlds'}
          onClick={() => onViewChange('worlds')}
        />

        <SidebarItem
          icon={User}
          label={t.profile}
          active={currentView === 'profile'}
          onClick={() => onViewChange('profile')}
        />
        <SidebarItem
          icon={MoreHorizontal}
          label={t.preferences}
          active={currentView === 'settings'}
          onClick={() => onViewChange('settings')}
        />
        <hr className="my-2 border-slate-900" />
        <SidebarItem
          icon={LogOut}
          label={t.logout || (lang === 'pt' ? 'Sair' : 'Logout')}
          onClick={onLogout}
        />



      </nav>
    </div>
  );
};

export default Sidebar;
