import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type Video = {
  id: string;
  title: string;
  dek?: string;
  byline?: string;
  thumbnail?: string;
  runtime?: string;
  href?: string;
  category?: string;
  date?: string;
  section: string;
  variant?: 'mosaic' | 'split' | 'half' | 'full' | 'default';
  featured?: boolean;
  display_order?: number;
};