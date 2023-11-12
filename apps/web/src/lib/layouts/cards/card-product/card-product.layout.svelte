<script lang="ts" context="module">
	import {
		AspectRatio,
		Badge,
		Button,
		Card,
		Icon,
		Tooltip,
		type ButtonEvents
	} from '@nostra/ui/components';
	import { currencyFormat, currencyTemplates } from '@nostra/utils';
	import type { ProductDTO, MoneyAmountDTO, ProductVariantDTO } from '@medusajs/types';

	const handleAddToCart = (event: ButtonEvents['click']) => {
		event.preventDefault();
		event.stopPropagation();
	};
</script>

<script lang="ts">
	export let product: ProductDTO;
	const { handle, title, thumbnail, variants, discountable } = product;
	const [variant] = variants as (ProductVariantDTO & { prices: MoneyAmountDTO[] })[];
	const [{ currency_code, amount }] = variant.prices;
	const currencyCode = (currency_code as string).toUpperCase() as keyof typeof currencyTemplates;

	const hasPrice = currencyCode && amount;
</script>

<Card.Root class="group overflow-hidden rounded-none border-none shadow-none">
	<AspectRatio
		ratio={1 / 1}
		class="relative flex items-center justify-center overflow-hidden rounded-sm"
	>
		<img
			class="transition-transform duration-300 ease-in-out group-hover:scale-105"
			src={thumbnail}
			alt={handle}
		/>

		{#if discountable}
			<Badge class="pointer-events-none absolute left-4 top-4 rounded-sm" variant="destructive">
				SALE
			</Badge>
		{/if}
	</AspectRatio>

	<Card.Content class="flex flex-row justify-between p-0 pt-4">
		<Card.Header class="p-0">
			<Card.Title>{title}</Card.Title>
			<Card.Description>
				{#if hasPrice}
					<span class="price">
						{currencyFormat({ value: amount, preset: currencyCode })}
					</span>
				{/if}
			</Card.Description>
		</Card.Header>

		<Tooltip.Root positioning={{ placement: 'bottom' }}>
			<Tooltip.Trigger asChild let:builder>
				<Button builders={[builder]} size="icon" on:click={handleAddToCart}>
					<Icon icon="ph:shopping-cart" />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<span>Add to cart</span>
			</Tooltip.Content>
		</Tooltip.Root>
	</Card.Content>
</Card.Root>
