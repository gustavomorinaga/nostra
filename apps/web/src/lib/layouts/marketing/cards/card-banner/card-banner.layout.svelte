<script lang="ts" context="module">
	import { AspectRatio, Button, Card, Icon } from '@nostra/ui/components';
	import type { TBanner } from '.';

	const BANNER_RATIO = 16 / 9;
</script>

<script lang="ts">
	type $$Props = { banner: TBanner };

	export let banner: $$Props['banner'];
	const { title, image, link } = banner;
</script>

<Card.Root class="relative flex h-full w-full items-center justify-center rounded-none border-none">
	<AspectRatio
		ratio={BANNER_RATIO}
		class="relative flex items-center justify-center overflow-hidden rounded-sm after:absolute after:inset-0 after:block after:bg-secondary-foreground after:opacity-50"
	>
		<img class="transition-transform group-hover:scale-105" src={image.src} alt={image.alt} />
	</AspectRatio>

	<Card.Content class="absolute inset-0 flex flex-col items-center justify-center">
		<Card.Header>
			<Card.Title class="text-3xl text-primary-foreground drop-shadow">{title}</Card.Title>
		</Card.Header>

		{#if link}
			<Button class="shadow" variant="secondary" href={link}>
				Shop now
				<Icon class="ml-2" icon="ph:arrow-right" />
			</Button>
		{/if}
	</Card.Content>
</Card.Root>
