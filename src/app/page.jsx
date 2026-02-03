"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import JourneyMap from '@/components/JourneyMap';
import LessonInterface from '@/components/LessonInterface';
import WorldsView from '@/components/WorldsView';
import SettingsView from '@/components/SettingsView';
import ProfileView from '@/components/ProfileView';
import LoginView from '@/components/LoginView';
import GoalsView from '@/components/GoalsView';
import DailyChallengeView from '@/components/DailyChallengeView';
import LeaderboardView from '@/components/LeaderboardView';
import LogoutView from '@/components/LogoutView';
import MobileNav from '@/components/MobileNav';


import coursesData from '@/data/courses.json';
import challengesData from '@/data/challenges.json';
import { ChevronLeft } from 'lucide-react';
import { translations } from '@/data/translations';
import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';


export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('js'); // 'js' or 'py'

  const [interfaceLanguage, setInterfaceLanguage] = useState('pt'); // 'pt' or 'en'
  const [view, setView] = useState('journey'); // 'journey', 'lesson', 'worlds', 'challenge'

  const [userData, setUserData] = useState({
    name: 'Estudante',
    username: '',
    email: '',
    bio: 'Futuro desenvolvedor tech!',
    xp: 0,
    streak: 0,
    gems: 0,
    following: 0,
    followers: 0,
    league: 'Starter'
  });

  useEffect(() => {
    if (!supabase) return;

    // Check current session

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsAuthenticated(true);
        setIsLoggedOut(false);
        updateUserData(session.user);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setIsAuthenticated(true);
        setIsLoggedOut(false);
        updateUserData(session.user);
      } else {
        setIsAuthenticated(false);
        if (event === 'SIGNED_OUT') {
          setIsLoggedOut(true);
        }
      }
    });




    return () => subscription.unsubscribe();
  }, []);

  const updateUserData = async (user) => {
    if (!supabase) return;

    // Fetch profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError && profileError.code === 'PGRST116') {
      // Profile not found, create one
      const newProfile = {
        id: user.id,
        name: user.user_metadata?.full_name || user.email.split('@')[0],
        email: user.email,
        xp: 0,
        streak: 0,
        gems: 0,
        league: 'Starter',
        bio: 'Futuro desenvolvedor tech!'
      };
      await supabase.from('profiles').insert([newProfile]);
      setUserData(newProfile);
    } else if (profile) {
      setUserData(profile);
    }

    // Fetch progress
    const { data: progress } = await supabase
      .from('user_progress')
      .select('lesson_id')
      .eq('user_id', user.id);

    if (progress) {
      const completedIds = progress.map(p => p.lesson_id);
      const updatedCourses = courses.map(course => ({
        ...course,
        lessons: course.lessons.map(lesson =>
          completedIds.includes(lesson.id) ? { ...lesson, completed: true } : lesson
        )
      }));
      setCourses(updatedCourses);
    }
  };

  const saveProfile = async (updates) => {
    if (!supabase) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);
  };



  const t = translations[interfaceLanguage];

  // Filter courses based on selected language
  const filteredCourses = coursesData.filter(c => c.id.startsWith(selectedLanguage));

  const [courses, setCourses] = useState(coursesData);
  const [activeCourseId, setActiveCourseId] = useState(filteredCourses[0].id);
  const [activeLessonId, setActiveLessonId] = useState(filteredCourses[0].lessons[0].id);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const activeCourse = courses.find(c => c.id === activeCourseId) || filteredCourses[0];
  const activeLesson = activeCourse.lessons.find(l => l.id === activeLessonId) || activeCourse.lessons[0];

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setIsLoggedOut(false);
    updateUserData(user);
  };

  const handleLogout = async () => {
    if (supabase) {
      try {
        await supabase.auth.signOut();
        setIsLoggedOut(true);
        setIsAuthenticated(false);
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
  };






  const handleUpdateUser = async (updates) => {
    setUserData(prev => ({ ...prev, ...updates }));
    await saveProfile(updates);
  };


  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    const newFiltered = coursesData.filter(c => c.id.startsWith(lang));
    setActiveCourseId(newFiltered[0].id);
    setActiveLessonId(newFiltered[0].lessons[0].id);
  };

  const handleSelectLesson = (lessonId, courseId) => {
    // Mark as started
    const updatedCourses = courses.map(course => ({
      ...course,
      lessons: course.lessons.map(lesson =>
        lesson.id === lessonId ? { ...lesson, started: true } : lesson
      )
    }));
    setCourses(updatedCourses);

    setActiveCourseId(courseId);
    setActiveLessonId(lessonId);
    setView('lesson');
  };

  const handleSelectChallenge = (challenge) => {
    setActiveChallenge(challenge);
    setView('challenge');
  };

  const handleViewChange = (newView) => {
    setView(newView);
    setActiveChallenge(null);
  };

  const handleLessonComplete = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (view === 'challenge') {
      // ... same logic for challenges ...
      const allLangChallenges = Object.values(challengesData[selectedLanguage]).flat();
      const currentIndex = allLangChallenges.findIndex(c => c.id === activeChallenge.id);

      // Save challenge progress
      if (user) {
        await supabase.from('user_progress').upsert({
          user_id: user.id,
          lesson_id: activeChallenge.id,
          completed_at: new Date().toISOString()
        });

        // Bonus XP
        const newXp = userData.xp + 50;
        setUserData(prev => ({ ...prev, xp: newXp }));
        await saveProfile({ xp: newXp });
      }

      if (currentIndex !== -1 && currentIndex < allLangChallenges.length - 1) {
        setActiveChallenge(allLangChallenges[currentIndex + 1]);
      } else {
        alert(interfaceLanguage === 'en' ? "Congratulations! You completed all world challenges." : "Parabéns! Você concluiu todos os desafios de mundo.");
        setView('worlds');
      }
    } else {
      // Update completion status in local state
      const updatedCourses = courses.map(course => ({
        ...course,
        lessons: course.lessons.map(lesson =>
          lesson.id === activeLessonId ? { ...lesson, completed: true } : lesson
        )
      }));
      setCourses(updatedCourses);

      // Save progress to Supabase
      if (user) {
        await supabase.from('user_progress').upsert({
          user_id: user.id,
          lesson_id: activeLessonId,
          completed_at: new Date().toISOString()
        });

        const newXp = userData.xp + 20;
        const newGems = userData.gems + 5;
        setUserData(prev => ({ ...prev, xp: newXp, gems: newGems }));
        await saveProfile({ xp: newXp, gems: newGems });
      }

      // Find next lesson logic ...
      const currentCourseIndex = filteredCourses.findIndex(c => c.id === activeCourseId);
      const currentLessonIndex = activeCourse.lessons.findIndex(l => l.id === activeLessonId);

      if (currentLessonIndex < activeCourse.lessons.length - 1) {
        setActiveLessonId(activeCourse.lessons[currentLessonIndex + 1].id);
      } else if (currentCourseIndex < filteredCourses.length - 1) {
        const nextCourse = filteredCourses[currentCourseIndex + 1];
        setActiveCourseId(nextCourse.id);
        setActiveLessonId(nextCourse.lessons[0].id);
      } else {
        alert(interfaceLanguage === 'en' ? "Amazing! You completed the entire journey." : "Incrível! Você concluiu toda a jornada.");
        setView('journey');
      }
    }
  };


  console.log("Rendering Home. isAuthenticated:", isAuthenticated, "isLoggedOut:", isLoggedOut);

  if (isLoggedOut) {
    return <LogoutView onBackToLogin={() => {
      setIsLoggedOut(false);
    }} lang={interfaceLanguage} />;
  }



  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} lang={interfaceLanguage} />;
  }


  return (
    <main className="flex h-screen bg-slate-950 text-white selection:bg-blue-500/30 overflow-hidden">
      <Sidebar
        currentView={view}
        onViewChange={handleViewChange}
        onLogout={handleLogout}
        lang={interfaceLanguage}
      />


      <div className="flex-1 flex overflow-hidden relative pb-16 md:pb-0">
        {view === 'journey' && (
          <JourneyMap
            courses={filteredCourses}
            activeCourse={activeCourse}
            currentLessonId={activeLessonId}
            onSelectLesson={handleSelectLesson}
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            userData={userData}
            lang={interfaceLanguage}
          />
        )}

        {view === 'worlds' && (
          <WorldsView
            challengesData={challengesData}
            onSelectChallenge={handleSelectChallenge}
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            lang={interfaceLanguage}
          />
        )}

        {view === 'settings' && (
          <SettingsView
            interfaceLanguage={interfaceLanguage}
            setInterfaceLanguage={setInterfaceLanguage}
          />
        )}

        {view === 'profile' && (
          <ProfileView
            userData={userData}
            onUpdateUser={handleUpdateUser}
            lang={interfaceLanguage}
          />
        )}
        {view === 'leaderboard' && (
          <LeaderboardView lang={interfaceLanguage} />
        )}
        {view === 'goals' && (
          <GoalsView userData={userData} lang={interfaceLanguage} />
        )}
        {view === 'daily_challenge' && (
          <DailyChallengeView
            lang={interfaceLanguage}
            onSelectChallenge={handleSelectChallenge}
            selectedLanguage={selectedLanguage}
          />
        )}

        {(view === 'lesson' || view === 'challenge') && (
          <div className="flex-1 flex flex-col">
            <header className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/30 backdrop-blur-sm z-10">
              <div className="flex items-center gap-4">
                <button onClick={() => setView(view === 'challenge' ? 'worlds' : 'journey')} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400">
                  <ChevronLeft size={20} />
                </button>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-500">{view === 'challenge' ? (interfaceLanguage === 'en' ? 'World Challenge' : 'Desafio de Mundo') : activeCourse.title}</span>
                  <span className="text-slate-700">/</span>
                  <span className="font-medium text-slate-200">{view === 'challenge' ? activeChallenge.title : activeLesson.title}</span>
                </div>
              </div>
            </header>
            <LessonInterface
              lesson={activeChallenge || activeLesson}
              onComplete={handleLessonComplete}
            />
          </div>
        )}
      </div>

      {(view === 'journey' || view === 'worlds') && <RightSidebar lang={interfaceLanguage} />}

      <MobileNav
        currentView={view}
        onViewChange={handleViewChange}
        lang={interfaceLanguage}
      />
    </main>
  );
}
