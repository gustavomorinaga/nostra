<script lang="ts">
	import { cn } from '$ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<nav class={cn('relative break-words', className)} aria-label="breadcrumb" {...$$restProps}>
	<ol class="flex items-center">
		<slot />
	</ol>
</nav>
