<script lang="ts">
	import { AspectRatio, Badge, Button, Card, Icon } from '@nostra/ui/components';
	import { currencyFormat, currencyTemplates } from '@nostra/utils';
	import type { ProductDTO, MoneyAmountDTO, ProductVariantDTO } from '@medusajs/types';

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
		<img class="transition-transform group-hover:scale-105" src={thumbnail} alt={handle} />

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

		<Button size="icon" title="Add to cart" on:click>
			<Icon icon="ph:shopping-cart" />
		</Button>
		<!-- <div>
			{#if !hasVariants}
				<span class="price unavailable">Unavailable</span>
			{:else if variants?.at(0)?.status === 'out-of-stock'}
				<span class="price out-of-stock">Out of stock</span>
			{:else}
				<span class="price">
					{currencyFormatter({ value: variants?.at(0)?.price || 0 })}
				</span>

				{#if hasDiscount}
					<span class="original-price">
						{currencyFormatter({ value: variants?.at(0)?.originalPrice || 0 })}
					</span>
				{/if}
			{/if}
		</div> -->
	</Card.Content>
</Card.Root>

<!-- <style lang="postcss">
	article.product {
		@apply card card-compact rounded-none bg-base-100 p-0;

		& > figure {
			@apply rounded-box aspect-semi-square shadow;

			& > img {
				@apply w-full;
			}
		}

		& > span.badge {
			@apply badge-error absolute left-4 top-4 rounded-md font-semibold;
		}

		& > div.card-body {
			@apply flex-row px-0;

			& > div {
				& > h3.name {
					@apply card-title line-clamp-1 text-base;
				}

				& > span.price {
					@apply font-heading text-xl font-bold tabular-nums text-primary;

					&.unavailable {
						@apply text-error;
					}

					&.out-of-stock {
						@apply text-warning;
					}
				}

				& > span.original-price {
					@apply align-top font-heading text-sm font-semibold text-gray-500 line-through;
				}
			}

			& > div.card-actions {
				& > button {
					@apply btn btn-square btn-primary;

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style> -->
