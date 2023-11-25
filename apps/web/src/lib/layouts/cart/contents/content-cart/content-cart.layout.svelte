<script lang="ts" context="module">
	import { Alert, Button, Icon } from '@nostra/ui/components';
	import { cn } from '@nostra/ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CartDTO } from '@medusajs/types';
</script>

<script lang="ts">
	type $$Props = HTMLAttributes<HTMLDivElement> & { cart: CartDTO };

	let className: $$Props['class'] = undefined;
	export let cart: $$Props['cart'];
	export { className as class };
</script>

<div class={cn('cart-list', className)}>
	<header>
		<h1>Cart</h1>

		<Button size="sm" variant="ghost">
			<Icon class="mr-2" icon="ph:trash" />
			Remove
		</Button>
	</header>

	{#if cart}
		<span>{cart}</span>
	{:else}
		<Alert.Root>
			<Icon class="absolute" icon="ph:shopping-cart" />
			<div class="ml-6">
				<Alert.Title>Your cart is empty</Alert.Title>
				<Alert.Description>Start shopping to add items to your cart.</Alert.Description>
			</div>
		</Alert.Root>
	{/if}
</div>

<style lang="postcss">
	div.cart-list {
		& > header {
			@apply mb-4 flex items-center justify-between;

			& > h1 {
				@apply text-2xl;
			}
		}
	}
</style>
