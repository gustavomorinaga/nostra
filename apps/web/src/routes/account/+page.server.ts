import { fail, redirect } from '@sveltejs/kit';

type TProfile = {
	username: string;
	full_name: string;
	website: string;
	avatar_url?: string;
};

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) throw redirect(303, '/');

	const { data: profile } = await supabase
		.from('profiles')
		.select(`username, full_name, website, avatar_url`)
		.eq('id', session.user.id)
		.single();

	return { session, profile: profile as TProfile | null };
};

export const actions = {
	update: async ({ request, locals }) => {
		const formData = await request.formData();
		const fullName = formData.get('fullName') as string;
		const username = formData.get('username') as string;
		const website = formData.get('website') as string;
		const avatarUrl = formData.get('avatarUrl') as string;

		const session = await locals.getSession();

		const { error } = await locals.supabase.from('profiles').upsert({
			id: session?.user.id,
			full_name: fullName,
			username,
			website,
			avatar_url: avatarUrl,
			updated_at: new Date()
		});

		if (error)
			return fail(500, {
				fullName,
				username,
				website,
				avatarUrl
			});

		return { fullName, username, website, avatarUrl };
	},

	signout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/');
		}
	}
};
