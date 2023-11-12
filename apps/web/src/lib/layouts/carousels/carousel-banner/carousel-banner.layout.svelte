<script lang="ts" context="module">
	import { Carousel, type CarouselOptions } from '@nostra/ui/components';
	import { CardBanner } from '$lib/layouts';

	const options: CarouselOptions = {
		centeredSlides: true,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		effect: 'fade',
		navigation: { enabled: true },
		pagination: { clickable: true },
		// autoplay: { delay: 5000 },
		injectStyles: [
			`.swiper-button-prev, .swiper-button-next {
				--swiper-navigation-size: 1rem;
				--swiper-navigation-color: hsl(var(--secondary-foreground) / 1);
				top: 1.5rem;
				left: auto;
				background-color: hsl(var(--secondary) / 1);
				padding: 0.75rem 1rem;
			}

			.swiper-button-prev {
				right: 3.6rem;
				border: solid hsl(var(--muted) / 1);
				border-width: 0 2px 0 0;
				border-radius: 0.5rem 0 0 0.5rem;
			}

			.swiper-button-next {
				right: 1rem;
				border-radius: 0 0.5rem 0.5rem 0;
			}`,
			`.swiper-pagination {
				--swiper-pagination-color: hsl(var(--primary) / 1);
				--swiper-pagination-bullet-inactive-color: hsl(var(--muted-foreground) / 1);
				--swiper-pagination-bullet-inactive-opacity: 0.5;
			}`
		]
	};
</script>

<script lang="ts">
	type TBanner = { title: string; image: string; link: string };

	export let banners: Array<TBanner> = [];

	const hasBanners = Boolean(banners.length);
</script>

{#if hasBanners}
	<Carousel.Root class="mb-16 h-[30vh] rounded-md shadow-md" {options}>
		{#each banners as banner}
			<Carousel.Slide>
				<CardBanner {banner} />
			</Carousel.Slide>
		{/each}
	</Carousel.Root>
{/if}
