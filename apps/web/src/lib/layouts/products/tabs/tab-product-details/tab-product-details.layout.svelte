<script lang="ts" context="module">
	import { Card } from '@nostra/ui/components';
	import type { ProductDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let product: ProductDTO;
	$: ({ description } = product);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>The Details</Card.Title>
	</Card.Header>

	<Card.Content>
		{#if description}
			<p>{description}</p>
		{:else}
			<p class="text-muted-foreground">No description</p>
		{/if}
	</Card.Content>
</Card.Root>
