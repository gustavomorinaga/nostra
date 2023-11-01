<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { TAddressValidationSchema } from '$lib/validations';

	export let form: SuperValidated<TAddressValidationSchema>;
	$: console.log(form);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Address</Card.Title>
		<Card.Description>Here you can manage your addresses</Card.Description>
	</Card.Header>
</Card.Root>
