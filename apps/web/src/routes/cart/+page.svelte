<script lang="ts">
	import { CardCheckout, ContentCart } from '$lib/layouts';

	export let data;
	$: ({ cart } = data);
</script>

<section class="cart">
	<ContentCart class="col-span-2" {cart} />
	<CardCheckout class="col-span-1" {cart} />
</section>

<style lang="postcss">
	section.cart {
		@apply grid grid-cols-3 gap-4;
	}
</style>
