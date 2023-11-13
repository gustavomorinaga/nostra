<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import { cn } from '$ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CarouselOptions, CarouselEvents } from '.';

	type $$Props = HTMLAttributes<SwiperContainer> & { options: CarouselOptions; observe?: boolean };
	type $$Events = CarouselEvents;

	let ref: SwiperContainer;
	let className: $$Props['class'] = undefined;
	export let options: $$Props['options'] = {};
	export let observe: $$Props['observe'] = false;
	export { className as class };

	options = {
		...options,
		...(observe && {
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			on: { observerUpdate: (swiper) => swiper.update() }
		})
	};

	onMount(() => {
		register();
		Object.assign(ref, options);
		ref.initialize();
	});
</script>

<swiper-container
	class={cn('relative block w-full overflow-hidden', className)}
	{...$$restProps}
	bind:this={ref}
	init="false"
>
	<slot />
</swiper-container>
