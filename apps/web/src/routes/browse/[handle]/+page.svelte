<script lang="ts" context="module">
	import { Breadcrumb } from '@nostra/ui/components';
	import { ContentProductView, ContentProductInfo, CarouselRelatedProducts } from '$lib/layouts';
	import type { ProductDTO, ProductTypeDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let data;
	$: ({ product, reviews, relatedProducts } = data);
	$: ({ collection, type } = product as ProductDTO & { type: ProductTypeDTO });
</script>

<svelte:head>
	<title>{product.title} | Nostra</title>
	<meta name="description" content={product.subtitle} />
</svelte:head>

<Breadcrumb.Root class="mb-4 text-muted-foreground">
	<Breadcrumb.Item>Browse Products</Breadcrumb.Item>
	<Breadcrumb.Item>{collection.title}</Breadcrumb.Item>
	<Breadcrumb.Item>{type.value}</Breadcrumb.Item>
	<Breadcrumb.Item isCurrent class="font-semibold" href="/browse/{product.handle}">
		{product.title}
	</Breadcrumb.Item>
</Breadcrumb.Root>

<ContentProductView {product} />
<ContentProductInfo {product} {reviews} />
<CarouselRelatedProducts products={relatedProducts} />
