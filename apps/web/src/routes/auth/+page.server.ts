import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
	const session = await locals.getSession();

	if (session) throw redirect(303, '/');

	return { url: url.origin };
};
