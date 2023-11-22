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
		const parsedValue = Number(value);
		if (min !== undefined && parsedValue <= min) return;
		value = parsedValue - (step || 1);
	};

	const handleIncrement = () => {
		const parsedValue = Number(value);
		if (max !== undefined && parsedValue >= max) return;
		value = parsedValue + (step || 1);
	};

	const handleOnlyNumber = (event: KeyboardEvent) => {
		if (!PERMITTED_KEYS.includes(event.key)) event.preventDefault();

		const parsedValue = Number(`${value}${event.key}`);
		const maxValue = max || Infinity;

		if (parsedValue > maxValue) event.preventDefault();
	};

	const handleHasQuantity = (event: FocusEvent) => {
		const targetValue = (event.target as HTMLInputElement).value;
		if (!Number(targetValue)) value = min || 0;
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
		class="w-20 border-none text-center tabular-nums outline-none"
		{disabled}
		bind:value
		on:keypress={handleOnlyNumber}
		on:blur={handleHasQuantity}
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
		@apply border-input inline-flex h-10 w-fit items-center rounded-md border px-px;
	}
</style>
