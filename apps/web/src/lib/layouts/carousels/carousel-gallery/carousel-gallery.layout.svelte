<script lang="ts" context="module">
	import { Carousel, type CarouselOptions } from '@nostra/ui/components';
	import { CardThumb, CardViewer } from '$lib/layouts';
	import type { ProductImageDTO } from '@medusajs/types';

	const [viewerOptions, thumbsOptions]: Array<CarouselOptions> = [
		{
			slidesPerView: 1,
			effect: 'fade',
			navigation: { enabled: true },
			controller: { control: '#thumbs' },
			injectStyles: [
				`.swiper-button-prev, .swiper-button-next {
					--swiper-navigation-size: 0.75rem;
					--swiper-navigation-color: hsl(var(--secondary-foreground) / 1);
					background-color: hsl(var(--secondary) / 1);
					padding: 0.75rem 0.9rem;
					border: 1px solid hsl(var(--input) / 1);
					border-radius: 0.5rem;
				}`
			]
		},
		{
			centeredSlides: true,
			slidesPerView: 4,
			spaceBetween: 16,
			slideToClickedSlide: true,
			controller: { control: '#viewer' },
			watchSlidesProgress: true,
			injectStyles: [
				`.swiper-wrapper {
					margin-left: calc(-38.5%);
				}`
			]
		}
	];
</script>

<script lang="ts">
	export let images: Array<ProductImageDTO> = [];
</script>

<section class="gallery">
	<Carousel.Root id="viewer" class="mb-4" observe options={viewerOptions}>
		{#each images as image}
			<Carousel.Slide>
				<CardViewer {image} />
			</Carousel.Slide>
		{/each}
	</Carousel.Root>

	<Carousel.Root id="thumbs" observe options={thumbsOptions}>
		{#each images as image}
			<Carousel.Slide class="cursor-pointer">
				<CardThumb {image} />
			</Carousel.Slide>
		{/each}
	</Carousel.Root>
</section>
