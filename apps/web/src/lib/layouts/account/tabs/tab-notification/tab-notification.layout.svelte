<script lang="ts" context="module">
	import { Card, Form } from '@nostra/ui/components';
</script>

<script lang="ts">
	import {
		notificationValidationSchema as schema,
		type TNotificationValidationSchema
	} from '$lib/validations';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<TNotificationValidationSchema>;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Notification</Card.Title>
		<Card.Description>Here you can manage your notification settings</Card.Description>
	</Card.Header>

	<Card.Content>
		<Form.Root
			id="notificationForm"
			method="POST"
			action="?/notification-update"
			{form}
			{schema}
			let:config
		/>
	</Card.Content>
</Card.Root>
