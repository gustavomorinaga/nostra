<script lang="ts" context="module">
	import { cn } from '@nostra/ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
</script>

<script lang="ts">
	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<span class={cn('mx-auto text-center text-sm text-white', className)}>
	<slot />
</span>
