<script lang="ts" context="module">
	import { Button, Icon } from '@nostra/ui/components';
	import { cn } from '@nostra/ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CartDTO } from '@medusajs/types';
</script>

<script lang="ts">
	type $$Props = HTMLAttributes<HTMLDivElement> & { cart: CartDTO };

	let className: $$Props['class'] = undefined;
	export let cart: $$Props['cart'];
	export { className as class };

	$: console.log(cart);
</script>

<div class={cn('cart-list', className)}>
	<header>
		<h1>Cart</h1>

		<Button size="sm" variant="ghost">
			<Icon class="mr-2" icon="ph:trash" />
			Remove
		</Button>
	</header>
</div>

<style lang="postcss">
	div.cart-list {
		& > header {
			@apply flex items-center justify-between;
		}
	}
</style>
