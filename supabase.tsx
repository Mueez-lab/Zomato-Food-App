import {createClient} from '@supabase/supabase-js';
import "react-native-url-polyfill/auto";

const supabaseUrl  = "https://nrpkriqwoxunrihiyqss.supabase.co"
const supabaseAnonKey  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ycGtyaXF3b3h1bnJpaGl5cXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NDk2MzcsImV4cCI6MjA1MDAyNTYzN30.F42LVMCuQsZmZxXIX9cV8osF7vQnfzUEbm10gCbfUEA"

export const supabase = createClient(supabaseUrl ,supabaseAnonKey ) 