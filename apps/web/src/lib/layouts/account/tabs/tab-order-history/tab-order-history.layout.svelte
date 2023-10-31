<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { ActionData, PageData } from '$routes/account/$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Order history</Card.Title>
		<Card.Description>Here you can find all your orders and their details</Card.Description>
	</Card.Header>
</Card.Root>
