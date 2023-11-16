<script lang="ts">
	import { CardSummary, ContentCart } from '$lib/layouts';

	export let data;
	$: ({ cart } = data);
</script>

<svelte:head>
	<title>Cart | Nostra</title>
	<meta name="description" content="Manage your cart and checkout your products." />
</svelte:head>

<section class="cart">
	<ContentCart class="col-span-2" {cart} />
	<CardSummary class="col-span-1" {cart} />
</section>

<style lang="postcss">
	section.cart {
		@apply grid grid-cols-3 gap-4;
	}
</style>
