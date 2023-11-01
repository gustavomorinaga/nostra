<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { TManagePasswordValidationSchema } from '$lib/validations';

	export let form: SuperValidated<TManagePasswordValidationSchema>;
	$: console.log(form);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Manage password</Card.Title>
		<Card.Description>
			Change your password here. After saving, you'll be logged out
		</Card.Description>
	</Card.Header>
</Card.Root>
