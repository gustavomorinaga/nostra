<script lang="ts">
	import { BreadcrumbSeparator } from '.';
	import { cn } from '$ui/utils';
	import type { HTMLLiAttributes } from 'svelte/elements';

	type $$Props = HTMLLiAttributes & { isCurrent?: boolean; isLastChild?: boolean };

	let ref: HTMLLIElement;
	let className: $$Props['class'] = undefined;
	export let isCurrent: $$Props['isCurrent'] = false;
	export let isLastChild: $$Props['isLastChild'] = false;
	export { className as class };

	$: if (ref?.parentElement) {
		const children = Array.from(ref.parentElement.querySelectorAll('li'));
		isLastChild = children.at(-1) === ref;
	}
</script>

<li
	bind:this={ref}
	class={cn('inline-flex items-center', className)}
	aria-current={isCurrent ? 'page' : undefined}
	{...$$restProps}
>
	<slot />
</li>

{#if !isLastChild}
	<BreadcrumbSeparator />
{/if}
