import { medusa, supabaseServer } from '$lib/servers';

export const handle = async ({ event, resolve }) => {
	event = await medusa.handleRequest(event);
	event.locals.supabase = supabaseServer({ event });
	event.locals.medusa = medusa;
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
