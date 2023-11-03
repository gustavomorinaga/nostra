<script lang="ts" context="module">
	import { Card, Form } from '@nostra/ui/components';
</script>

<script lang="ts">
	import {
		accountValidationSchema as schema,
		type TAccountValidationSchema
	} from '$lib/validations';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let form: SuperValidated<TAccountValidationSchema>;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Account settings</Card.Title>
		<Card.Description>Manage your account settings and set email preferences</Card.Description>
	</Card.Header>

	<Card.Content>
		<Form.Root id="accountForm" method="POST" action="?/account-update" {form} {schema} let:config>
			<Form.Field {config} name="email">
				<Form.Item>
					<Form.Label>Email</Form.Label>
					<Form.Input type="email" readonly />
					<Form.Validation />
				</Form.Item>
			</Form.Field>

			<Form.Field {config} name="fullName">
				<Form.Item>
					<Form.Label>Full Name</Form.Label>
					<Form.Input type="text" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>

			<Form.Field {config} name="username">
				<Form.Item>
					<Form.Label>Username</Form.Label>
					<Form.Input type="text" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>

			<Form.Field {config} name="website">
				<Form.Item>
					<Form.Label>Website</Form.Label>
					<Form.Input type="text" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
		</Form.Root>
	</Card.Content>

	<Card.Footer class="justify-end gap-2">
		<Form.Button form="accountForm">Update profile</Form.Button>
	</Card.Footer>
</Card.Root>
