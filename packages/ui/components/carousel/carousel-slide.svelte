<script lang="ts">
	import { cn } from '$ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SwiperSlide } from 'swiper/element';

	type $$Props = HTMLAttributes<SwiperSlide> & { lazy?: boolean };

	let className: $$Props['class'] = undefined;
	export let lazy: $$Props['lazy'] = false;
	export { className as class };
</script>

<swiper-slide class={cn('pointer-events-auto', className)} {lazy} {...$$restProps}>
	<slot />
</swiper-slide>
