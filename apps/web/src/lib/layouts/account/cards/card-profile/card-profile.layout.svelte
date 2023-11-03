<script lang="ts">
	import { page } from '$app/stores';
	import { AspectRatio, Avatar, Button, Card, Icon } from '@nostra/ui/components';
	import type { Session } from '@supabase/supabase-js';

	const {
		user: { email, phone }
	} = $page.data.session as Session;

	const profile = {
		name: 'Gustavo Morinaga',
		email,
		phone,
		avatar: 'https://github.com/gustavomorinaga.png',
		cover: 'images/jpgs/cover.jpg'
	};

	const profileInitials = () => {
		const [firstName, lastName] = profile.name.split(' ');
		return [firstName[0], lastName[0]].join('');
	};
</script>

<Card.Root>
	<AspectRatio ratio={270 / 60} class="m-2 overflow-hidden rounded">
		<figure class="flex h-full w-full items-center justify-center">
			<img src={profile.cover} alt="{profile.name}'s cover" />
		</figure>
	</AspectRatio>

	<Card.Header class="relative flex-row items-center justify-between pb-2">
		<Avatar.Root class="ring-card absolute -top-36 left-8 h-40 w-40 ring-4">
			<Avatar.Image src={profile.avatar} alt={profile.name} />
			<Avatar.Fallback>{profileInitials}</Avatar.Fallback>
		</Avatar.Root>

		<Card.Title class="font-heading text-xl">{profile.name}</Card.Title>

		<Button variant="outline" size="icon">
			<Icon icon="ph:dots-three-outline-vertical-fill" />
		</Button>
	</Card.Header>

	<Card.Content>
		<div class="infos">
			<span class="info">
				<Icon class="text-xl" icon="ph:envelope" />
				<span>{profile.email}</span>
			</span>

			{#if profile.phone}
				<span class="info">
					<Icon class="text-xl" icon="ph:phone" />
					<span>{profile.phone}</span>
				</span>
			{/if}
		</div>
	</Card.Content>
</Card.Root>

<style lang="postcss">
	div.infos {
		@apply flex gap-4;

		& span.info {
			@apply flex items-center gap-2 text-sm;
		}
	}
</style>
