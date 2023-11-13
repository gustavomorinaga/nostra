<script lang="ts" context="module">
	import { Label, RadioGroup, RadioGroupItem } from '@nostra/ui/components';
	import { cn } from '@nostra/ui/utils';
	import type { ComponentProps } from 'svelte';
</script>

<script lang="ts">
	type $$Props = ComponentProps<RadioGroupItem>;

	export let value: $$Props['value'];
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<Label
	class={cn('flex h-10 w-fit cursor-pointer items-center justify-center px-4 py-2', className)}
>
	<RadioGroup.Item class="sr-only" {value} {...$$restProps} />
	<slot />
</Label>
