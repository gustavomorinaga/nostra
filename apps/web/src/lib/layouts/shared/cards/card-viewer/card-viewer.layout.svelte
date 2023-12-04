<script lang="ts" context="module">
	import { AspectRatio } from '@nostra/ui/components';
	import { cn } from '@nostra/ui/utils';
	import type { ProductImageDTO } from '@medusajs/types';

	const VIEWER_RATIO = 85 / 64;
</script>

<script lang="ts">
	type $$Props = { image: ProductImageDTO };

	export let image: $$Props['image'];
	$: ({ id, url } = image);
</script>

<AspectRatio class="flex items-center justify-center" ratio={VIEWER_RATIO}>
	<img class="h-full w-full object-cover" src={url} alt={id} />
</AspectRatio>
