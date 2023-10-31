<script lang="ts">
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { Auth } from '@supabase/auth-ui-svelte';
	import type { ComponentProps } from 'svelte';

	export let data;
	const { supabase: supabaseClient, url } = data;

	const authProps: ComponentProps<Auth> = {
		supabaseClient,
		view: 'sign_in',
		redirectTo: `${url}/auth/callback`,
		providers: ['facebook', 'google'],
		showLinks: true,
		appearance: { theme: ThemeSupa }
	};
</script>

<svelte:head>
	<title>Log in | Nostra</title>
	<meta name="description" content="Log in to Nostra store" />
</svelte:head>

<Auth {...authProps} />
