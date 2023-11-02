<script lang="ts">
	import { Card, Form } from '@nostra/ui/components';
	import {
		paymentMethodsValidationSchema as schema,
		type TPaymentMethodsValidationSchema
	} from '$lib/validations';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<TPaymentMethodsValidationSchema>;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Payment methods</Card.Title>
		<Card.Description>Here you can manage your payment methods and add new ones</Card.Description>
	</Card.Header>

	<Card.Content>
		<Form.Root
			id="paymentMethodsForm"
			method="POST"
			action="?/payment-methods-update"
			{form}
			{schema}
			let:config
		/>
	</Card.Content>
</Card.Root>
