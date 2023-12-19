import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
	const session = await locals.getSession();
	if (session) redirect(303, '/');

	return { origin: url.origin };
};
