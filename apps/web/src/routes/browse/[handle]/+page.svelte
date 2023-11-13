<script lang="ts" context="module">
	import { ContentProductDetail, CarouselRelatedProducts } from '$lib/layouts';
</script>

<script lang="ts">
	export let data;
	$: ({ product, relatedProducts } = data);
</script>

<svelte:head>
	<title>{product.title} | Nostra</title>
	<meta name="description" content={product.subtitle} />
</svelte:head>

<ContentProductDetail {product} />
<CarouselRelatedProducts products={relatedProducts} />
