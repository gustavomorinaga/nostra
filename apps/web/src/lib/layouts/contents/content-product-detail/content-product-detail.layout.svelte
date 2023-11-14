<script lang="ts" context="module">
	import { RadioGroup, Separator } from '@nostra/ui/components';
	import { currencyFormat, currencyTemplates } from '@nostra/utils';
	import { CarouselGallery } from '$lib/layouts';
	import { RadioCard } from '$lib/components';
	import type { MoneyAmountDTO, ProductDTO, ProductVariantDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let product: ProductDTO;
	$: ({ title, images, variants, options } = product);
	$: [variant] = variants as (ProductVariantDTO & { prices: MoneyAmountDTO[] })[];
	$: [{ currency_code, amount }] = variant.prices;
	$: currencyCode = (currency_code as string).toUpperCase() as keyof typeof currencyTemplates;
	$: hasPrice = currencyCode && amount;
	$: hasOptions = options && options.length > 0;
</script>

<article class="product-detail">
	<CarouselGallery {images} />

	<article>
		<h1>{title}</h1>

		{#if hasPrice}
			<span class="price">
				{currencyFormat({ value: amount || 0, preset: currencyCode })}
			</span>
		{/if}

		<Separator class="my-4" />

		{#if hasOptions}
			<div class="options">
				{#each options as option (option.id)}
					<div class="option">
						<span>{option.title}</span>

						<RadioGroup.Root class="auto-cols-min grid-flow-col">
							{#each option.values as value (value.id)}
								<RadioCard
									class="[&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-primary-foreground hover:bg-secondary/80 focus-within:ring-ring ring-offset-background border-input rounded-md border focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
									value={value.id}
								>
									<span>{value.value}</span>
								</RadioCard>
							{/each}
						</RadioGroup.Root>
					</div>
				{/each}
			</div>
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
				@apply font-heading text-primary block text-2xl font-bold tabular-nums;
			}

			/* & > span.original-price {
				@apply font-heading align-top text-sm font-semibold text-gray-500 line-through;
			} */

			& > div.options {
				@apply flex flex-row flex-wrap gap-x-8 gap-y-4;

				& > div.option {
					@apply block flex-1;

					& > span {
						@apply font-heading text-muted-foreground mb-2 block text-sm font-semibold;
					}
				}
			}
		}
	}
</style>
