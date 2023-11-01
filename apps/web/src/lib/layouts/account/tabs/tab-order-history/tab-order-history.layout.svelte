<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { TOrderHistoryValidationSchema } from '$lib/validations';

	export let form: SuperValidated<TOrderHistoryValidationSchema>;
	$: console.log(form);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Order history</Card.Title>
		<Card.Description>Here you can find all your orders and their details</Card.Description>
	</Card.Header>
</Card.Root>
