<script lang="ts">
	import { Icon, Input, Label, type InputEvents } from '@nostra/ui/components';
	import { cn } from '@nostra/ui/utils';
	import type { ComponentProps } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type $$Props = HTMLInputAttributes & { icon: ComponentProps<Icon>['icon'] };
	type $$Events = InputEvents;

	let className: $$Props['class'] = undefined;
	export let icon: $$Props['icon'];
	export let value: $$Props['value'] = undefined;
	export { className as class };
</script>

<Label class={cn('relative flex items-center rounded-md', className)}>
	<Icon class="absolute left-4 top-1 translate-y-1/2 transform" {icon} />
	<Input
		class="pl-10"
		bind:value
		on:blur
		on:change
		on:click
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:paste
		on:input
		{...$$restProps}
	/>
</Label>
