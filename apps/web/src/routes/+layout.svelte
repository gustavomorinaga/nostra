<script lang="ts" context="module">
	import '$lib/styles/app.style.postcss';
	import { Navbar, Wrapper } from '$lib/layouts';
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { Footer } from '$lib/layouts';

	export let data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, _session) => {
			if (session?.expires_at !== _session?.expires_at) invalidate('supabase:auth');
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Navbar />

<Wrapper>
	<slot />
</Wrapper>

<Footer />
