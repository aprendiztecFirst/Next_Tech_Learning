import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fail-safe: Check if keys are properly configured
const isConfigured = supabaseUrl &&
    supabaseUrl.startsWith('https://') &&
    supabaseAnonKey &&
    supabaseAnonKey.startsWith('ey'); // Supabase JWT keys start with 'ey'

if (typeof window !== 'undefined') {
    if (!isConfigured) {
        console.group('🔍 DEBUG SUPABASE CONFIGURATION:');

        if (!supabaseUrl) {
            console.warn('❌ URL: MISSING (Vercel env is not reaching the client)');
        } else if (!supabaseUrl.startsWith('https://')) {
            console.warn('❌ URL: INVALID FORMAT (' + supabaseUrl + ')');
        } else {
            console.log('✅ URL: FOUND (' + supabaseUrl.substring(0, 15) + '...)');
        }

        if (!supabaseAnonKey) {
            console.warn('❌ ANON_KEY: MISSING (Vercel env is not reaching the client)');
        } else if (!supabaseAnonKey.startsWith('ey')) {
            console.warn('❌ ANON_KEY: INVALID (Parece ser uma chave do Stripe ou incorreta: ' + supabaseAnonKey.substring(0, 15) + '...)');
        } else {
            console.log('✅ ANON_KEY: FOUND (Valid format detected)');
        }

        console.info('👉 RELEMBRE: No Vercel, o nome deve ser EXATAMENTE:');
        console.info('   NEXT_PUBLIC_SUPABASE_URL');
        console.info('   NEXT_PUBLIC_SUPABASE_ANON_KEY');
        console.info('👉 Após salvar no Vercel, você PRECISA clicar em "REDEPLOY" na aba Deployments.');
        console.groupEnd();
    }
}

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

