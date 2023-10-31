import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { medusa } from '$lib/servers';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';

export const handle = async ({ event, resolve }) => {
	event = await medusa.handleRequest(event);

	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();

		return session;
	};

	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => name === 'content-range'
	});

	// Security Headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set(
		'Permissions-Policy',
		'payment=(self "https://js.stripe.com/"), accelerometer=(), camera=(), display-capture=(), encrypted-media=(), fullscreen=(), gyroscope=(), hid=(), magnetometer=(), microphone=(), midi=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()'
	);

	return response;
};
