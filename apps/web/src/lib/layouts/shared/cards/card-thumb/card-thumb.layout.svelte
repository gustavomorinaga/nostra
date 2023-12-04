<script lang="ts" context="module">
	import { AspectRatio } from '@nostra/ui/components';
	import type { ProductImageDTO } from '@medusajs/types';

	const THUMB_RATIO = 1 / 1;
</script>

<script lang="ts">
	type $$Props = { image: ProductImageDTO; lazy?: boolean };

	export let image: $$Props['image'];
	export let lazy: $$Props['lazy'] = false;
	$: ({ id, url } = image);
</script>

<AspectRatio class="flex items-center justify-center" ratio={THUMB_RATIO}>
	<img class="h-full w-full object-cover" src={url} alt={id} loading={lazy ? 'lazy' : 'eager'} />
</AspectRatio>
