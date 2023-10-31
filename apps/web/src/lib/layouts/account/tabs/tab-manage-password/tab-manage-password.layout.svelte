<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { ActionData, PageData } from '$routes/account/$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Manage password</Card.Title>
		<Card.Description>
			Change your password here. After saving, you'll be logged out
		</Card.Description>
	</Card.Header>
</Card.Root>
