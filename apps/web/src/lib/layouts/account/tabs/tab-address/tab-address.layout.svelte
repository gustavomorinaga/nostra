<script lang="ts" context="module">
	import { Card, Form } from '@nostra/ui/components';
</script>

<script lang="ts">
	import {
		addressValidationSchema as schema,
		type TAddressValidationSchema
	} from '$lib/validations';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<TAddressValidationSchema>;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Address</Card.Title>
		<Card.Description>Here you can manage your addresses</Card.Description>
	</Card.Header>

	<Card.Content>
		<Form.Root
			id="addressForm"
			method="POST"
			action="?/address-update"
			{form}
			{schema}
			let:config
		/>
	</Card.Content>
</Card.Root>
