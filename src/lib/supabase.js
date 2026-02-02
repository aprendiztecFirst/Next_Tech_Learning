import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fail-safe: Check if keys are properly configured
const isConfigured = supabaseUrl &&
    supabaseUrl !== 'YOUR_SUPABASE_URL' &&
    supabaseAnonKey &&
    supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY';

if (!isConfigured && typeof window !== 'undefined') {
    console.group('🛠️ Supabase Configuration Status');
    if (!supabaseUrl || supabaseUrl === 'YOUR_SUPABASE_URL') {
        console.error('❌ NEXT_PUBLIC_SUPABASE_URL is missing or default.');
    } else {
        console.log('✅ NEXT_PUBLIC_SUPABASE_URL is set.');
    }

    if (!supabaseAnonKey || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
        console.error('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY is missing or default.');
    } else {
        console.log('✅ NEXT_PUBLIC_SUPABASE_ANON_KEY is set.');
    }
    
    console.warn('⚠️ Please check your Vercel Dashboard -> Settings -> Environment Variables.');
    console.warn('⚠️ Ensure all variables start with NEXT_PUBLIC_ prefix.');
    console.groupEnd();
}

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

