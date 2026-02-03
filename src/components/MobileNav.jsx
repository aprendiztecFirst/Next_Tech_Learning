"use client";

import React from 'react';
import { Home, Trophy, Target, TrendingUp, User, Sparkles } from 'lucide-react';
import { translations } from '@/data/translations';

const NavItem = ({ icon: Icon, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center flex-1 gap-1 py-2 transition-all ${active ? 'text-blue-500' : 'text-slate-500 hover:text-slate-300'
            }`}
    >
        <Icon size={20} className={active ? 'fill-blue-500/10' : ''} />
    </button>
);

const MobileNav = ({ currentView, onViewChange, lang = 'pt' }) => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-slate-950/80 backdrop-blur-xl border-t border-slate-900 flex items-center px-2 z-[100]">
            <NavItem
                icon={Home}
                active={currentView === 'journey'}
                onClick={() => onViewChange('journey')}
            />
            <NavItem
                icon={Sparkles}
                active={currentView === 'worlds'}
                onClick={() => onViewChange('worlds')}
            />
            <NavItem
                icon={Trophy}
                active={currentView === 'daily_challenge'}
                onClick={() => onViewChange('daily_challenge')}
            />
            <NavItem
                icon={TrendingUp}
                active={currentView === 'leaderboard'}
                onClick={() => onViewChange('leaderboard')}
            />
            <NavItem
                icon={User}
                active={currentView === 'profile' || currentView === 'settings'}
                onClick={() => onViewChange('profile')}
            />
        </div>
    );
};

export default MobileNav;
