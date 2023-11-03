<script lang="ts" context="module">
	import { invalidateAll } from '$app/navigation';

	const COVER_RATIO = 270 / 60;

	const handleSignOut = async () => {
		await fetch('?/account-signout', { method: 'POST', body: new FormData() });
		invalidateAll();
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { AspectRatio, Avatar, Button, Card, DropdownMenu, Icon } from '@nostra/ui/components';
	import type { Session } from '@supabase/supabase-js';

	const {
		user: { email, phone }
	} = $page.data.session as Session;

	const profile = {
		name: 'Gustavo Morinaga',
		email,
		phone,
		avatar: 'https://avatars.githubusercontent.com/u/47375774?v=4',
		cover: 'images/jpgs/cover.jpg'
	};

	const profileInitials = () => {
		const [firstName, lastName] = profile.name.split(' ');
		return [firstName[0], lastName[0]].join('');
	};
</script>

<Card.Root class="mb-2">
	<AspectRatio ratio={COVER_RATIO} class="m-2 overflow-hidden rounded">
		<figure class="flex h-full w-full items-center justify-center">
			<img src={profile.cover} alt="{profile.name}'s cover" />
		</figure>
	</AspectRatio>

	<Card.Header class="relative flex-row items-center justify-between pb-2">
		<div class="avatar">
			<Avatar.Root class="ring-card h-40 w-40 ring-4">
				<Avatar.Image src={profile.avatar} alt={profile.name} />
				<Avatar.Fallback>{profileInitials}</Avatar.Fallback>
			</Avatar.Root>

			<Button size="icon" variant="outline" class="absolute right-0 top-0">
				<Icon icon="ph:camera-fill" />
			</Button>
		</div>

		<Card.Title class="font-heading text-xl">{profile.name}</Card.Title>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline" size="icon">
					<Icon icon="ph:dots-three-outline-vertical-fill" />
				</Button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content>
				<DropdownMenu.Item class="gap-2" on:click={handleSignOut}>
					<Icon icon="ph:sign-out-fill" />
					<span>Sign out</span>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
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
	div.avatar {
		@apply absolute -top-36 left-8;
	}

	div.infos {
		@apply flex gap-4;

		& span.info {
			@apply flex items-center gap-2 text-sm;
		}
	}
</style>