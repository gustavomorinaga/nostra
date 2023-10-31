<script>
	import '$lib/styles/app.style.postcss';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (session?.expires_at !== session?.expires_at) invalidate('supabase:auth');
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto flex min-h-screen max-w-6xl flex-col p-4;
	}
</style>
