import type { SupabaseClient } from '@supabase/supabase-js';

type TServerClient =  {
	supabase: SupabaseClient;
};

type TProfile = {
	id?: string;
	username: string;
	full_name: string;
	website?: string;
	avatar_url?: string;
};

export type TGetProfile = TServerClient & { id: string };

export type TUpdateProfile = TServerClient & { data: TProfile };

export const accountRepository = {
	async getProfile({ id, supabase }: TGetProfile) {
		return await supabase
			.from('profiles')
			.select(`username, full_name, website, avatar_url`)
			.eq('id', id)
			.single<TProfile>();
	},

	async updateProfile({ data, supabase }: TUpdateProfile) {
		return await supabase.from('profiles').upsert({ ...data, updated_at: new Date() });
	},

	async signOut({ supabase }: TServerClient) {
		return await supabase.auth.signOut();
	}
};
