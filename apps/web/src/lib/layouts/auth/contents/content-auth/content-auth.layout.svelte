<script lang="ts" context="module">
	import { AspectRatio, Card } from '@nostra/ui/components';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { Auth } from '@supabase/auth-ui-svelte';
	import type { SupabaseClient } from '@supabase/supabase-js';
	import type { ComponentProps } from 'svelte';

	const images = {
		'auth-banner': {
			src: '/images/jpgs/banner-black-n-white.jpg',
			alt: 'Auth banner',
			ratio: 1 / 1
		}
	};
</script>

<script lang="ts">
	type $$Props = { supabase: SupabaseClient; origin: string };

	let supabaseClient: $$Props['supabase'];
	export let origin: $$Props['origin'];
	export { supabaseClient as supabase };

	const authProps: ComponentProps<Auth> = {
		supabaseClient,
		view: 'sign_in',
		redirectTo: `${origin}/auth/callback`,
		providers: ['facebook', 'google'],
		showLinks: true,
		socialLayout: 'horizontal',
		appearance: { theme: ThemeSupa }
	};
</script>

<Card.Root class="grid grid-cols-2 overflow-hidden">
	<AspectRatio
		ratio={images['auth-banner'].ratio}
		class="flex items-center justify-center overflow-hidden"
	>
		<img src={images['auth-banner'].src} alt={images['auth-banner'].alt} />
	</AspectRatio>

	<Card.Content class="my-auto p-6">
		<Card.Header class="px-0">
			<Card.Title tag="h1" class="text-3xl">Enter to Nostra Store</Card.Title>
		</Card.Header>

		<Auth {...authProps} />
	</Card.Content>
</Card.Root>
