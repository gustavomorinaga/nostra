<script lang="ts">
	import { Card, Form } from '@nostra/ui/components';
	import {
		orderHistoryValidationSchema as schema,
		type TOrderHistoryValidationSchema
	} from '$lib/validations';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<TOrderHistoryValidationSchema>;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Order history</Card.Title>
		<Card.Description>Here you can find all your orders and their details</Card.Description>
	</Card.Header>

	<Card.Content>
		<Form.Root
			id="orderHistoryForm"
			method="POST"
			action="?/order-history-update"
			{form}
			{schema}
			let:config
		/>
	</Card.Content>
</Card.Root>
