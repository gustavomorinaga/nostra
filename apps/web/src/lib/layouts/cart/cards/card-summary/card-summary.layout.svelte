<script lang="ts" context="module">
	import { Button, Card, Separator } from '@nostra/ui/components';
	import { currencyFormat } from '@nostra/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CartDTO } from '@medusajs/types';
</script>

<script lang="ts">
	type $$Props = HTMLAttributes<HTMLDivElement> & { cart: CartDTO };

	let className: $$Props['class'] = undefined;
	export let cart: $$Props['cart'];
	export { className as class };
</script>

<Card.Root class={className}>
	<Card.Content class="p-6">
		<div class="items">
			<div class="subtotal">
				<span class="step">Subtotal</span>
				<span class="price">
					{currencyFormat({ value: cart?.subtotal || 0, preset: 'EUR' })}
				</span>
			</div>

			<div class="discount">
				<span class="step">Discount</span>
				<span class="price">
					{currencyFormat({ value: cart?.discount_total || 0, preset: 'EUR' })}
				</span>
			</div>
		</div>

		<Separator decorative class="my-4" />

		<div class="total">
			<span class="step">Grand total</span>
			<span class="price">
				{currencyFormat({ value: cart?.total || 0, preset: 'EUR' })}
			</span>
		</div>
	</Card.Content>

	<Card.Footer>
		<Button size="lg" class="w-full">Checkout now</Button>
	</Card.Footer>
</Card.Root>

<style lang="postcss">
	div:where(.subtotal, .discount, .total) {
		@apply flex items-center justify-between;
	}

	div.items {
		@apply space-y-2;

		& > div:where(.subtotal, .discount) {
			& > span.step {
				@apply text-muted-foreground font-normal;
			}
		}
	}

	div.total {
		& > span.step {
			@apply font-semibold;
		}

		& > span {
			@apply text-xl font-bold;
		}
	}
</style>
