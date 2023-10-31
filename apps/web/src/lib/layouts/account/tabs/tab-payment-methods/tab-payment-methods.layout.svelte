<script lang="ts">
	import { Card } from '@nostra/ui/components';
	import type { ActionData, PageData } from '$routes/account/$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Payment methods</Card.Title>
		<Card.Description>Here you can manage your payment methods and add new ones</Card.Description>
	</Card.Header>
</Card.Root>
