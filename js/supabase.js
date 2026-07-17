const SUPABASE_URL = "https://kpswfoxhfnqcqfiybttb.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_UM1grvRRMosVkHtBh-D74g_JnYEjj5P";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.supabaseClient = supabaseClient;

console.log("Supabase Connected");
