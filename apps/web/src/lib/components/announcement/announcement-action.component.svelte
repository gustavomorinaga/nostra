<script lang="ts" context="module">
	import { Button, type ButtonProps, type ButtonEvents } from '@nostra/ui/components';
</script>

<script lang="ts">
	type $$Props = ButtonProps;
	type $$Events = ButtonEvents;
</script>

<Button {...$$restProps} on:click on:keydown>
	<slot />
</Button>
