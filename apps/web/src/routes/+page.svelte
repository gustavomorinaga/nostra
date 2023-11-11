<script lang="ts" context="module">
	import { CarouselFeaturedProducts, Newsletter, USP } from '$lib/layouts';
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

<CarouselFeaturedProducts {products} />
<USP />
<Newsletter />
