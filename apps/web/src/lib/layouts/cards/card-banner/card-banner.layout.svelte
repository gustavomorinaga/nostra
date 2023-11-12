<script lang="ts">
	import { AspectRatio, Button, Card, Icon } from '@nostra/ui/components';

	type TBanner = { title: string; image: string; link: string };

	export let banner: TBanner;
	const { title, image, link } = banner;
</script>

<Card.Root class="relative flex h-full w-full items-center justify-center rounded-none border-none">
	<AspectRatio
		ratio={16 / 9}
		class="after:bg-secondary-foreground relative flex items-center justify-center overflow-hidden rounded-sm after:absolute after:inset-0 after:block after:opacity-50"
	>
		<img class="transition-transform group-hover:scale-105" src={image} alt={title} />
	</AspectRatio>

	<Card.Content class="absolute inset-0 flex flex-col items-center justify-center">
		<Card.Header>
			<Card.Title class="text-primary-foreground text-3xl drop-shadow">{banner.title}</Card.Title>
		</Card.Header>

		<Button class="shadow" variant="secondary" href={link}>
			Shop now
			<Icon class="ml-2" icon="ph:arrow-right" />
		</Button>
	</Card.Content>
</Card.Root>

<!-- <style lang="postcss">
	article.banner {
		@apply card after:bg-primary-focus h-full w-full rounded-none before:pointer-events-none
		;

		& > figure {
			@apply aspect-video;

			& > img {
				@apply w-full;
			}
		}

		& > div.card-body {
			@apply items-center justify-center text-center;

			& > h2 {
				@apply text-5xl font-bold text-white drop-shadow;
			}

			& > div.card-actions {
				@apply mt-4;

				& > a {
					@apply btn-accent btn shadow;

					& > iconify-icon {
						@apply text-xl;
					}
				}
			}
		}
	}
</style> -->
