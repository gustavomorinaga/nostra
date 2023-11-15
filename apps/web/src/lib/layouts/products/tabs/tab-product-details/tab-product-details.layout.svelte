<script lang="ts" context="module">
	import type { ProductDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let product: ProductDTO;
	$: ({ description } = product);
</script>

<section class="details">
	<h2>Details</h2>

	{#if description}
		<p>{description}</p>
	{:else}
		<p class="text-muted-foreground">No description</p>
	{/if}
</section>

<style lang="postcss">
	section.details {
		& > h2 {
			@apply text-2xl;
		}

		& > p {
			@apply mt-2;
		}
	}
</style>
