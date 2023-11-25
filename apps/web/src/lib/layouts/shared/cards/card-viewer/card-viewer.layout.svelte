<script lang="ts" context="module">
	import { AspectRatio } from '@nostra/ui/components';
	import type { ProductImageDTO } from '@medusajs/types';

	const VIEWER_RATIO = 85 / 64;
</script>

<script lang="ts">
	export let image: ProductImageDTO;
	$: ({ id, url } = image);
</script>

<AspectRatio
	class="flex items-center justify-center overflow-hidden rounded-md shadow"
	ratio={VIEWER_RATIO}
>
	<img class="h-full w-full object-cover" src={url} alt={id} />
</AspectRatio>
