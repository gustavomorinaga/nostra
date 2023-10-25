<script lang="ts">
	import { cn } from '$ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SwiperSlide } from 'swiper/element';

	type $$Props = HTMLAttributes<SwiperSlide>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<swiper-slide class={cn('pointer-events-auto', className)} {...$$restProps}>
	<slot />
</swiper-slide>
