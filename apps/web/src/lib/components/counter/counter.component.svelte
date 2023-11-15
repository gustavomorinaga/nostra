<script lang="ts">
	import { Button, Input, Icon } from '@nostra/ui/components';

	type $$Props = { value: number; min?: number; max?: number; step?: number; disabled?: boolean };

	export let value: $$Props['value'] = 0;
	export let min: $$Props['min'] = undefined;
	export let max: $$Props['max'] = undefined;
	export let step: $$Props['step'] = undefined;
	export let disabled: $$Props['disabled'] = false;

	const PERMITTED_KEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	$: minReached = min !== undefined && value <= min;
	$: maxReached = max !== undefined && value >= max;

	const handleDecrement = () => {
		if (min !== undefined && value <= min) return;
		value -= step || 1;
	};

	const handleIncrement = () => {
		if (max !== undefined && value >= max) return;
		value += step || 1;
	};

	const handleOnlyNumber = (event: KeyboardEvent) => {
		if (!PERMITTED_KEYS.includes(event.key)) event.preventDefault();

		const parsedValue = Number(`${value}${event.key}`);
		const maxValue = max || Infinity;

		if (parsedValue > maxValue) event.preventDefault();
	};
</script>

<div class="counter">
	<Button
		size="icon"
		variant="ghost"
		class="h-9 w-9"
		on:click={handleDecrement}
		disabled={minReached || disabled}
	>
		<Icon icon="ph:minus" />
	</Button>

	<Input
		type="text"
		inputmode="numeric"
		class="w-12 border-none text-center tabular-nums outline-none"
		{disabled}
		bind:value
		on:keypress={handleOnlyNumber}
	/>

	<Button
		size="icon"
		variant="ghost"
		class="h-9 w-9"
		on:click={handleIncrement}
		disabled={maxReached || disabled}
	>
		<Icon icon="ph:plus" />
	</Button>
</div>

<style lang="postcss">
	div.counter {
		@apply border-input inline-flex h-10 items-center rounded-md border px-px;
	}
</style>
