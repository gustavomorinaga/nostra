<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { TNotificationValidationSchema } from '$lib/validations';

	export let form: SuperValidated<TNotificationValidationSchema>;
	$: console.log(form);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Notification</Card.Title>
		<Card.Description>Here you can manage your notification settings</Card.Description>
	</Card.Header>
</Card.Root>
