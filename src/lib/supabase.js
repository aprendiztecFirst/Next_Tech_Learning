import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fail-safe: Check if keys are properly configured
const isConfigured = supabaseUrl &&
    supabaseUrl !== 'YOUR_SUPABASE_URL' &&
    supabaseAnonKey &&
    supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY';

if (!isConfigured) {
    if (typeof window !== 'undefined') {
        console.warn('Supabase is not configured yet. Please fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
    }
}

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

