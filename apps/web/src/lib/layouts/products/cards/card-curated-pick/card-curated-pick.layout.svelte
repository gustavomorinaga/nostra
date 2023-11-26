<script lang="ts" context="module">
	import { AspectRatio, Button, Card, Icon } from '@nostra/ui/components';
	import type { TPick } from '.';

	const PICK_RATIO = 1 / 1;
</script>

<script lang="ts">
	type $$Props = { pick: TPick; lazy?: boolean };

	export let pick: $$Props['pick'];
	export let lazy: $$Props['lazy'] = false;
	const { title, image, link: href } = pick;
</script>

<Card.Root class="relative border-none">
	<AspectRatio
		class="after:from-primary flex items-center justify-center overflow-hidden rounded-md shadow after:absolute after:inset-0 after:bg-gradient-to-t"
		ratio={PICK_RATIO}
	>
		<img
			class="h-full w-full object-cover"
			src={image.src}
			alt={image.alt}
			loading={lazy ? 'lazy' : 'eager'}
		/>
	</AspectRatio>

	<Card.Footer class="absolute inset-x-0 bottom-0">
		<Button class="w-full shadow" variant="secondary" {href}>
			{title}
			<Icon class="ml-2" icon="ph:arrow-right" />
		</Button>
	</Card.Footer>
</Card.Root>
