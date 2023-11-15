<script lang="ts">
	import { CardCheckout, ContentCart } from '$lib/layouts';

	export let data;
	$: ({ cart } = data);

	$: console.log(cart);
</script>

<section class="cart">
	<ContentCart />
	<CardCheckout {cart} />
</section>
