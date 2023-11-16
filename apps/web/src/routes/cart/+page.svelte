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
	<ContentCart class="col-span-1 lg:col-span-2" {cart} />
	<CardSummary class="sticky top-20 col-span-1 block self-start" {cart} />
</section>

<style lang="postcss">
	section.cart {
		@apply relative grid h-full grow auto-rows-max items-start gap-4 lg:grid-cols-3;
	}
</style>
