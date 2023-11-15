<script lang="ts" context="module">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Skeleton, Tabs } from '@nostra/ui/components';
	import type { ComponentType } from 'svelte';
	import type { ProductDTO } from '@medusajs/types';
</script>

<script lang="ts">
	export let product: ProductDTO;
	export let reviews: Array<object>;

	type TProductTabs = {
		name: string;
		value: string;
		content: Promise<ComponentType>;
		props?: Record<string, unknown>;
	};

	$: productTabs = [
		{
			name: 'The Details',
			value: 'details',
			content: import('$lib/layouts').then((m) => m.TabProductDetails),
			props: { product }
		},
		{
			name: 'Ratings & Reviews',
			value: 'reviews',
			content: import('$lib/layouts').then((m) => m.TabProductReviews),
			props: { reviews }
		},
		{
			name: 'Discussions',
			value: 'discussions',
			content: import('$lib/layouts').then((m) => m.TabProductDiscussions),
			props: {}
		}
	] as Array<TProductTabs>;

	$: currentTab = $page.url.searchParams.get('tab') ?? 'details';
	$: if (browser) {
		if (productTabs) handleTabChange('details');
	}

	const handleTabChange = (tab: TProductTabs['value']) => goto(`?tab=${tab}`, { noScroll: true });
</script>

<Tabs.Root class="mb-16" value={currentTab}>
	<Tabs.List class="flex h-fit justify-start overflow-x-auto overflow-y-hidden">
		{#each productTabs as { name, value }}
			<Tabs.Trigger class="flex-1" {value} on:click={() => handleTabChange(value)}>
				{name}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>

	{#each productTabs as productTab}
		<Tabs.Content class="mt-8" value={productTab.value}>
			{#await Promise.all([productTab.content])}
				<Skeleton class="h-56 w-full rounded" />
			{:then [tab]}
				<svelte:component this={tab} {...productTab.props} />
			{/await}
		</Tabs.Content>
	{/each}
</Tabs.Root>
