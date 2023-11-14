<script lang="ts" context="module">
	import { Breadcrumb } from '@nostra/ui/components';
	import { ContentProductDetail, CarouselRelatedProducts } from '$lib/layouts';
	import type { ProductDTO, ProductTypeDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let data;
	$: ({ product, relatedProducts } = data);
	$: ({ collection, type } = product as ProductDTO & { type: ProductTypeDTO });
</script>

<svelte:head>
	<title>{product.title} | Nostra</title>
	<meta name="description" content={product.subtitle} />
</svelte:head>

<Breadcrumb.Root class="text-muted-foreground mb-4">
	<Breadcrumb.Item>Browser Products</Breadcrumb.Item>
	<Breadcrumb.Item>{collection.title}</Breadcrumb.Item>
	<Breadcrumb.Item isCurrent class="font-semibold">{type.value}</Breadcrumb.Item>
</Breadcrumb.Root>

<ContentProductDetail {product} />
<CarouselRelatedProducts products={relatedProducts} />
