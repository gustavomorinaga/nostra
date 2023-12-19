<script lang="ts" context="module">
	import { Button, Card, Icon } from '@nostra/ui/components';
	import type { TOffer } from '.';
</script>

<script lang="ts">
	type $$Props = { offer: TOffer };

	export let offer: $$Props['offer'];
	const { title, description, link, image } = offer;
</script>

<Card.Root class="mb-16 grid grid-cols-5 overflow-hidden bg-primary">
	<figure class="hidden max-h-56 items-center justify-center overflow-hidden md:col-span-2 md:flex">
		<img src={image.src} alt={image.alt} />
	</figure>

	<Card.Content class="col-span-full my-auto p-0 md:col-span-3">
		<Card.Header>
			<Card.Title tag="h5" class="text-sm uppercase text-muted-foreground">
				{title}
			</Card.Title>
			<Card.Description
				class="text-3xl font-medium text-primary-foreground"
				style="text-wrap: balance;"
			>
				{description}
			</Card.Description>
		</Card.Header>

		<Card.Footer>
			<Button variant="secondary" href={link.href}>
				{link.title}
				<Icon class="ml-2" icon="ph:arrow-right" />
			</Button>
		</Card.Footer>
	</Card.Content>
</Card.Root>
