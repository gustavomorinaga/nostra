<script lang="ts" context="module">
	import '$lib/styles/app.style.postcss';
	import { Navbar, Wrapper } from '$lib/layouts';
</script>

<script lang="ts">
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

<Navbar />

<Wrapper>
	<slot />
</Wrapper>
