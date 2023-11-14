<script lang="ts" context="module">
	import type { ProductDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let product: ProductDTO;
</script>

{#if product?.description}
	<p>{product.description}</p>
{:else}
	<p class="text-muted-foreground">No description</p>
{/if}
