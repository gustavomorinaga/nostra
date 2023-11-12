<script lang="ts" context="module">
	import { Button, Icon, Tooltip } from '@nostra/ui/components';
	import { InputWithIcon } from '$lib/components';

	const images = {
		logo: 'images/svgs/logo-min.svg'
	};

	// const routes = [
	// 	{
	// 		name: 'Shop',
	// 		paths: [
	// 			{
	// 				name: 'Men',
	// 				link: '/shop/men'
	// 			},
	// 			{
	// 				name: 'Women',
	// 				link: '/shop/women'
	// 			},
	// 			{
	// 				name: 'Casual',
	// 				link: '/shop/casual'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		name: 'Most wanted',
	// 		link: '/most-wanted'
	// 	},
	// 	{
	// 		name: 'New arrival',
	// 		link: '/new-arrival'
	// 	},
	// 	{
	// 		name: 'Brands',
	// 		link: '/brands'
	// 	}
	// ];
</script>

<script lang="ts">
	import { page } from '$app/stores';

	$: ({ session } = $page.data);
</script>

<header class="navbar-container">
	<nav>
		<div class="navbar-start">
			<a class="logo" href="/">
				<figure>
					<img src={images.logo} alt="Logo" width="120" height="20" />
				</figure>
			</a>
		</div>

		<div class="navbar-center">
			<!-- <ul class="menu menu-horizontal">
				{#each routes as route}
					<li>
						{#if !route?.paths?.length}
							<a href={route.link}>{route.name}</a>
						{:else}
							<details>
								<summary>{route.name}</summary>
								<ul>
									{#each route.paths as path}
										<li>
											<a href={path.link}>{path.name}</a>
										</li>
									{/each}
								</ul>
							</details>
						{/if}
					</li>
				{/each}
			</ul> -->
		</div>

		<div class="navbar-end">
			<InputWithIcon
				class="bg-card"
				type="text"
				icon="ph:magnifying-glass"
				placeholder="Search..."
			/>

			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="outline" href="/cart">
						<Icon icon="ph:shopping-cart" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<span>Cart</span>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						size="icon"
						variant="outline"
						href={session ? '/account' : '/auth'}
					>
						<Icon icon={session ? 'ph:user' : 'ph:sign-in'} />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<span>{session ? 'Account' : 'Sign In'}</span>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</nav>
</header>

<style lang="postcss">
	header.navbar-container {
		@apply bg-card supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50 border-b backdrop-blur;

		& > nav {
			@apply container flex h-14 items-center justify-between;

			& > div:where(.navbar-start, .navbar-center, .navbar-end) {
				@apply flex items-center gap-2;
			}
		}
	}
</style>
