import { createClient } from '@supabase/supabase-js';

// Hardcoded fallback to ensure deployment works even if Vercel env vars fail
const FALLBACK_URL = 'https://slrunmfaaeaicyjnizkv.supabase.co';
const FALLBACK_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscnVubWZhYWVhaWN5am5pemt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5OTM3MDAsImV4cCI6MjA4NTU2OTcwMH0.ULOy_T6Is22OuRnvbI60sD_DEJo4YnRhCrPixpvDaAY';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_KEY;

// Fail-safe: Check if keys are properly configured
const isConfigured = supabaseUrl &&
    supabaseUrl.startsWith('https://') &&
    supabaseAnonKey &&
    supabaseAnonKey.startsWith('ey');

if (typeof window !== 'undefined' && !isConfigured) {
    console.warn('⚠️ Supabase configuration is still potentially invalid. Using fallbacks.');
}

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;


