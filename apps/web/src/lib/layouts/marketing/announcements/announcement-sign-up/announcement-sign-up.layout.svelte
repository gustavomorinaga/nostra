<script lang="ts" context="module">
	import { page } from '$app/stores';
	import { Icon } from '@nostra/ui/components';
	import { Announcement } from '$lib/components/announcement';
</script>

<script lang="ts">
	let visible = !$page.data.session;

	const handleVisible = (status: 'show' | 'hide') => (visible = status === 'show');
</script>

{#if visible}
	<Announcement.Root
		class="sticky top-14 z-40 -mt-4 mb-4 w-screen"
		style="margin-inline: calc(-50vw + 50%)"
	>
		<Announcement.Content>
			Sign up and <strong>GET 20% OFF</strong> for your first order.
			<Announcement.Link href="/auth">Sign up now</Announcement.Link>
		</Announcement.Content>

		<Announcement.Action
			size="icon"
			variant="secondary"
			class="h-6 w-6"
			on:click={() => handleVisible('hide')}
		>
			<Icon icon="ph:x" />
		</Announcement.Action>
	</Announcement.Root>
{/if}
