<script lang="ts" context="module">
	import { cn } from '@nostra/ui/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
</script>

<script lang="ts">
	type $$Props = HTMLAnchorAttributes & { href: string };

	let className: $$Props['class'] = undefined;
	export let href: $$Props['href'];
	export { className as class };
</script>

<a class={cn('font-semibold hover:underline', className)} {href} {...$$restProps}>
	<slot />
</a>
