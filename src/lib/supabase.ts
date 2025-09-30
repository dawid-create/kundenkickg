import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  website: string;
  services_interested: string;
  help_needed: string;
  created_at?: string;
  updated_at?: string;
};