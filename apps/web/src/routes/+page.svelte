<script lang="ts" context="module">
	import { Newsletter, USP } from '$lib/layouts';
</script>

<script lang="ts">
	export let data;
	const { products } = data;
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

<USP />
<Newsletter />
