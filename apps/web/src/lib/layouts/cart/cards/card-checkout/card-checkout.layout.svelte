<script lang="ts" context="module">
	import { Button, Card, Separator } from '@nostra/ui/components';
	import { currencyFormat } from '@nostra/utils';
	import type { CartDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let cart: CartDTO;
</script>

<Card.Root>
	<Card.Content class="p-6">
		<div class="items">
			<div class="subtotal">
				<strong>Subtotal</strong>
				<span>{currencyFormat({ value: cart?.subtotal || 0, preset: 'EUR' })}</span>
			</div>

			<div class="discount">
				<strong>Discount</strong>
				<span>{currencyFormat({ value: cart?.discount_total || 0, preset: 'EUR' })}</span>
			</div>
		</div>

		<Separator class="my-4" />

		<div class="total">
			<strong>Grand total</strong>
			<span>{currencyFormat({ value: cart?.total || 0, preset: 'EUR' })}</span>
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
			& > strong {
				@apply text-muted-foreground font-medium;
			}
		}
	}

	div.total {
		& > strong {
			@apply font-semibold;
		}

		& > span {
			@apply text-xl font-bold;
		}
	}
</style>
