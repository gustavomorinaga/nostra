import type { SupabaseClient } from '@supabase/supabase-js';

type TProfile = {
	id?: string;
	username: string;
	full_name: string;
	website?: string;
	avatar_url?: string;
};

export type TGetProfile = {
	id: string;
	supabase: SupabaseClient;
};

export type TUpdateProfile = {
	data: TProfile;
	supabase: SupabaseClient;
};

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
	}
};
