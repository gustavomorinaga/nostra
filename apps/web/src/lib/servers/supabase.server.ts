import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createBrowserClient } from '@supabase/ssr';
import type { Handle } from '@sveltejs/kit';

type TSupabaseServerProps = Pick<Parameters<Handle>[0], 'event'>;

export const supabaseServer = ({ event }: TSupabaseServerProps) =>
	createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, value, options) => {
				event.cookies.set(key, value, { ...options, path: options?.path ?? '/' });
			},
			remove: (key, options) => {
				event.cookies.delete(key, { ...options, path: options?.path ?? '/' });
			}
		}
	});
