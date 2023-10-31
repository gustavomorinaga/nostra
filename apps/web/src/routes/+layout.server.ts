export const load = async ({ locals }) => {
	const { user, cart } = locals;

	return { user, cart, session: await locals.getSession() };
};
