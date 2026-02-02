import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fail-safe: Check if keys are properly configured
const isConfigured = supabaseUrl &&
    supabaseUrl !== 'YOUR_SUPABASE_URL' &&
    supabaseAnonKey &&
    supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY';

if (!isConfigured && typeof window !== 'undefined') {
    console.warn('🔍 DEBUG SUPABASE CONFIGURATION:');

    if (!supabaseUrl || supabaseUrl === 'YOUR_SUPABASE_URL') {
        console.warn('❌ URL: MISSING (Vercel env is not reaching the client)');
    } else {
        console.warn('✅ URL: FOUND (' + supabaseUrl.substring(0, 15) + '...)');
    }

    if (!supabaseAnonKey || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('❌ ANON_KEY: MISSING (Vercel env is not reaching the client)');
    } else {
        console.warn('✅ ANON_KEY: FOUND (' + supabaseAnonKey.substring(0, 8) + '...)');
    }

    console.warn('👉 RELEMBRE: No Vercel, o nome deve ser EXATAMENTE:');
    console.warn('   NEXT_PUBLIC_SUPABASE_URL');
    console.warn('   NEXT_PUBLIC_SUPABASE_ANON_KEY');
    console.warn('👉 Após salvar no Vercel, você PRECISA clicar em "REDEPLOY" na aba Deployments.');
}

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

