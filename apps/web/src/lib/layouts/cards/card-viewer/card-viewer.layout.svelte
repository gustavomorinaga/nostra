<script lang="ts" context="module">
	import { AspectRatio } from '@nostra/ui/components';
	import type { ProductImageDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let image: ProductImageDTO;
	$: ({ id, url } = image);
</script>

<AspectRatio
	class="flex items-center justify-center overflow-hidden rounded-md shadow"
	ratio={1 / 1}
>
	<img class="h-full w-full object-cover" src={url} alt={id} />
</AspectRatio>
