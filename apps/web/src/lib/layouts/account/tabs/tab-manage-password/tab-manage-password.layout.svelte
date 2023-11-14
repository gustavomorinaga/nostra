<script lang="ts" context="module">
	import { Card, Form } from '@nostra/ui/components';
</script>

<script lang="ts">
	import {
		managePasswordValidationSchema as schema,
		type TManagePasswordValidationSchema
	} from '$lib/validations';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<TManagePasswordValidationSchema>;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Manage password</Card.Title>
		<Card.Description>
			Change your password here. After saving, you'll be logged out
		</Card.Description>
	</Card.Header>

	<Card.Content>
		<Form.Root
			id="managePasswordForm"
			class="md:w-1/2"
			method="POST"
			action="?/manage-password-update"
			{form}
			{schema}
			let:config
		>
			<Form.Field {config} name="oldPassword">
				<Form.Item>
					<Form.Label>Old password</Form.Label>
					<Form.Input type="password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>

			<Form.Field {config} name="newPassword">
				<Form.Item>
					<Form.Label>New password</Form.Label>
					<Form.Input type="password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>

			<Form.Field {config} name="confirmNewPassword">
				<Form.Item>
					<Form.Label>Confirm new password</Form.Label>
					<Form.Input type="password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
		</Form.Root>
	</Card.Content>

	<Card.Footer class="justify-end gap-2">
		<Form.Button form="managePasswordForm">Update password</Form.Button>
	</Card.Footer>
</Card.Root>
