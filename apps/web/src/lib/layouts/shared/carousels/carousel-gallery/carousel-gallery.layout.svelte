<script lang="ts" context="module">
	import { Carousel, type CarouselOptions } from '@nostra/ui/components';
	import { CardThumb, CardViewer } from '$lib/layouts';
	import type { ProductImageDTO } from '@medusajs/types';
</script>

<script lang="ts">
	type $$Props = { images: Array<ProductImageDTO> };

	export let images: $$Props['images'] = [];

	const [viewerOptions, thumbsOptions]: Array<CarouselOptions> = [
		{
			slidesPerView: 1,
			effect: 'fade',
			navigation: { enabled: true },
			controller: { control: '#thumbs' },
			zoom: true,
			injectStyles: [
				`.swiper-wrapper {
					background-color: hsl(var(--muted) / 1);
				}`,
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
				`.swiper {
					--swiper-preloader-color: hsl(var(--primary) / 1);
				}`,
				`.swiper-wrapper {
					margin-left: calc(-38.5%);
				}`
			]
		}
	];
</script>

<section class="gallery">
	<Carousel.Root id="viewer" class="mb-4 rounded-md" observe zoom options={viewerOptions}>
		{#each images as image (image.id)}
			<Carousel.Slide>
				<CardViewer {image} />
			</Carousel.Slide>
		{/each}
	</Carousel.Root>

	<Carousel.Root id="thumbs" class="-mb-2" observe options={thumbsOptions}>
		{#each images as image (image.id)}
			<Carousel.Slide class="mb-2 cursor-pointer overflow-hidden rounded-md" lazy>
				<CardThumb {image} lazy />
			</Carousel.Slide>
		{/each}
	</Carousel.Root>
</section>
