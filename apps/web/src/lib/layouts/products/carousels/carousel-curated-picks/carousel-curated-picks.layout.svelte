<script lang="ts" context="module">
	import { Carousel, type CarouselOptions } from '@nostra/ui/components';
	import { CardCuratedPick, type TPick } from '$lib/layouts';

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
			768: { slidesPerView: 3 },
			1024: { slidesPerView: 4 }
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
	export let picks: Array<TPick> = [];

	const hasPicks = Boolean(picks.length);
</script>

{#if hasPicks}
	<section class="curated-picks">
		<header>
			<h3>Curated Picks</h3>
		</header>

		<Carousel.Root class="h-fit overflow-visible" {options}>
			{#each picks as pick (pick.handle)}
				<Carousel.Slide class="mb-12">
					<CardCuratedPick {pick} />
				</Carousel.Slide>
			{/each}
		</Carousel.Root>
	</section>
{/if}

<style lang="postcss">
	section.curated-picks {
		@apply mb-16 block;

		& header {
			@apply mb-8 flex justify-between;

			& > h3 {
				@apply max-w-xs p-0 text-3xl font-bold;
			}
		}
	}
</style>
