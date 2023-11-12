<script lang="ts" context="module">
	import { currencyFormat, currencyTemplates } from '@nostra/utils';
	import { CarouselGallery } from '$lib/layouts';
	import type { MoneyAmountDTO, ProductDTO, ProductVariantDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let product: ProductDTO;
	const { title, images, variants, discountable } = product;
	const [variant] = variants as (ProductVariantDTO & { prices: MoneyAmountDTO[] })[];
	const [{ currency_code, amount }] = variant.prices;
	const currencyCode = (currency_code as string).toUpperCase() as keyof typeof currencyTemplates;
	const hasVariants = Boolean(variants.length);
	const hasPrice = currencyCode && amount;
</script>

<article class="product-detail">
	<CarouselGallery {images} />

	<article>
		<h1>{title}</h1>

		{#if hasPrice}
			<span class="price">
				{currencyFormat({ value: amount, preset: currencyCode })}
			</span>
		{/if}

		<!-- {#if !hasVariants}
			<span class="price unavailable">Unavailable</span>
		{:else if currentVariant.status === 'out-of-stock'}
			<span class="price out-of-stock">Out of stock</span>
		{:else}
			<span class="price">
				{currencyFormatter({ value: currentVariant.price })}
			</span>

			{#if hasDiscount}
				<span class="original-price">
					{currencyFormatter({ value: currentVariant.originalPrice || 0 })}
				</span>
			{/if}
		{/if} -->
	</article>
</article>

<style lang="postcss">
	article.product-detail {
		@apply mb-8 grid grid-cols-2 gap-8;

		& > * {
			@apply col-span-1;
		}

		& > article {
			& > h1 {
				@apply mb-4 text-3xl;
			}

			& > fieldset.rating {
				@apply mb-6;
			}

			& > span.price {
				@apply font-heading text-primary block text-3xl font-bold tabular-nums;
			}

			& > span.original-price {
				@apply font-heading align-top text-sm font-semibold text-gray-500 line-through;
			}
		}
	}
</style>
