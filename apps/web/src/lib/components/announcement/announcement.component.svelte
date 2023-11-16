<script lang="ts" context="module">
	import { cn } from '@nostra/ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
</script>

<script lang="ts">
	type $$Props = HTMLAttributes<HTMLElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<section class={cn(`bg-primary px-4 py-2`, className)} {...$$restProps}>
	<div class="container mx-auto flex items-center">
		<slot />
	</div>
</section>
