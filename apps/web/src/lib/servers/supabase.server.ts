import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export const supabase = (event: RequestEvent) => createSupabaseServerClient({
	supabaseUrl: PUBLIC_SUPABASE_URL,
	supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
	event
});
