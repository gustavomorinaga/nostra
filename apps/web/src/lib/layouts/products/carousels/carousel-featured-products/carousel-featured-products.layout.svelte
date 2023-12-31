<script lang="ts" context="module">
	import { Carousel, type CarouselOptions } from '@nostra/ui/components';
	import { CardProduct } from '$lib/layouts';
	import { getProductState } from '$lib/stores';

	const options: CarouselOptions = {
		centeredSlides: false,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 24,
		autoHeight: false,
		grabCursor: false,
		allowTouchMove: true,
		navigation: { enabled: true },
		scrollbar: { enabled: true, draggable: true },
		breakpoints: {
			768: { slidesPerView: 2 },
			1024: { slidesPerView: 3 }
		},
		injectStyles: [
			`.swiper {
				overflow-x: clip;
				overflow-y: initial;
			}`,
			`.swiper-button-prev, .swiper-button-next {
				--swiper-navigation-size: 1rem;
				--swiper-navigation-color: hsl(var(--secondary-foreground) / 1);
				top: -3.75rem;
				left: auto;
				background-color: hsl(var(--secondary) / 1);
				padding: 0.75rem 1rem;
			}

			.swiper-button-prev {
				right: 2.6rem;
				border-radius: 0.5rem 0 0 0.5rem;
			}

			.swiper-button-next {
				right: 0;
				border-radius: 0 0.5rem 0.5rem 0;
			}`,
			`.swiper-scrollbar {
				--swiper-scrollbar-size: 0.5rem;
				--swiper-scrollbar-sides-offset: 25%;
				--swiper-scrollbar-drag-bg-color: hsl(var(--primary) / 1);
				--swiper-scrollbar-bg-color: hsl(var(--muted) / 1);
			}`
		]
	};
</script>

<script lang="ts">
	const productState = getProductState();
	$: ({ products } = $productState);
	$: hasProducts = Boolean(products.length);
</script>

{#if hasProducts}
	<section class="featured-products">
		<header>
			<h3>Featured Products</h3>
		</header>

		<Carousel.Root class="h-fit overflow-visible" {options}>
			{#each products as product (product.id)}
				<Carousel.Slide class="mb-12">
					<a href="/browse/{product.handle}">
						<CardProduct {product} />
					</a>
				</Carousel.Slide>
			{/each}
		</Carousel.Root>
	</section>
{/if}

<style lang="postcss">
	section.featured-products {
		@apply mb-16 block;

		& header {
			@apply mb-8 flex justify-between;

			& > h3 {
				@apply max-w-xs p-0 text-3xl font-bold;
			}
		}
	}
</style>
