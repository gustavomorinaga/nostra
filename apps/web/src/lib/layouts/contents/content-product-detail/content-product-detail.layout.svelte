<script lang="ts" context="module">
	import { Separator } from '@nostra/ui/components';
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

		<Separator class="my-4" />
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

			& > span.price {
				@apply font-heading text-primary block text-3xl font-bold tabular-nums;
			}

			/* & > span.original-price {
				@apply font-heading align-top text-sm font-semibold text-gray-500 line-through;
			} */
		}
	}
</style>
