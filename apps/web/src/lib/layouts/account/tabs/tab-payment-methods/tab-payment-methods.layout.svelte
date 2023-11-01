<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { TPaymentMethodsValidationSchema } from '$lib/validations';

	export let form: SuperValidated<TPaymentMethodsValidationSchema>;
	$: console.log(form);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Payment methods</Card.Title>
		<Card.Description>Here you can manage your payment methods and add new ones</Card.Description>
	</Card.Header>
</Card.Root>
