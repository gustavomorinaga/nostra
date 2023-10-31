<script lang="ts">
	import { Button } from '@nostra/ui/components';

	export let data;
	const { session, products } = data;
</script>

<svelte:head>
	<title>Nostra</title>
	<meta
		name="description"
		content="Log in to Nostra store and access exclusive deals on the latest fashion trends. Shop with ease and security using our trusted authentication system. Join our community of fashion enthusiasts today!"
	/>
</svelte:head>

<h1>Nostra</h1>

<h2>Products List</h2>

<ul>
	{#each products as product (product.id)}
		<li>
			<span>{product.title}</span>
		</li>
	{/each}
</ul>

{#if session}
	<p>Logged in as <strong>{session.user.email}</strong></p>
	<Button href="/account">Account</Button>
{:else}
	<Button href="/auth">Sign In</Button>
{/if}
