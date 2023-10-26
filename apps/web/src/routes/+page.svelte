<script lang="ts">
	export let data;
	const { products } = data;
</script>

<h1>Nostra</h1>

<h2>Products List</h2>

<ul>
	{#each products as product (product.id)}
		<li>
			<span>{product.title}</span>
		</li>
	{/each}
</ul>
