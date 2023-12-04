<script lang="ts" context="module">
	import { cn } from '@nostra/ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
</script>

<script lang="ts">
	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<span
	class={cn(
		'whitespace-pre-line break-words text-sm text-white md:mx-auto md:whitespace-normal md:text-center',
		className
	)}
>
	<slot />
</span>
