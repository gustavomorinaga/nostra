<script lang="ts" context="module">
	import { ContentAuth } from '$lib/layouts';
</script>

<script lang="ts">
	export let data;
	const { supabase, origin } = data;
</script>

<svelte:head>
	<title>Log in | Nostra</title>
	<meta name="description" content="Log in to Nostra store" />
</svelte:head>

<ContentAuth {supabase} {origin} />
