<script lang="ts" context="module">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Skeleton, Tabs } from '@nostra/ui/components';
	import type { ComponentType } from 'svelte';
</script>

<script lang="ts">
	export let data;

	type TAccountTabs = {
		name: string;
		value: string;
		content: Promise<ComponentType>;
		form: (typeof data.forms)[keyof typeof data.forms];
	};

	const accountTabs = [
		{
			name: 'Account settings',
			value: 'account',
			content: import('$lib/layouts').then((m) => m.TabAccount),
			form: data.forms.accountForm
		},
		{
			name: 'Manage password',
			value: 'manage-password',
			content: import('$lib/layouts').then((m) => m.TabManagePassword),
			form: data.forms.managePasswordForm
		},
		{
			name: 'Order history',
			value: 'order-history',
			content: import('$lib/layouts').then((m) => m.TabOrderHistory),
			form: data.forms.orderHistoryForm
		},
		{
			name: 'Payment methods',
			value: 'payment-methods',
			content: import('$lib/layouts').then((m) => m.TabPaymentMethods),
			form: data.forms.paymentMethodsForm
		},
		{
			name: 'Address',
			value: 'address',
			content: import('$lib/layouts').then((m) => m.TabAddress),
			form: data.forms.addressForm
		},
		{
			name: 'Notification',
			value: 'notification',
			content: import('$lib/layouts').then((m) => m.TabNotification),
			form: data.forms.notificationForm
		}
	] as Array<TAccountTabs>;

	let currentTab = $page.url.searchParams.get('tab') ?? 'account';

	const handleTabChange = (tab: TAccountTabs['value']) => goto(`?tab=${tab}`);
</script>

<svelte:head>
	<title>Account | Nostra</title>
	<meta
		name="description"
		content="Manage your account settings, change your password, view your order history, add or remove payment methods, update your address, and customize your notification settings with Nostra's account management options."
	/>
</svelte:head>

<Tabs.Root value={currentTab}>
	<Tabs.List class="flex h-fit justify-start overflow-x-auto overflow-y-hidden">
		{#each accountTabs as { name, value }}
			<Tabs.Trigger {value} on:click={() => handleTabChange(value)}>{name}</Tabs.Trigger>
		{/each}
	</Tabs.List>

	{#each accountTabs as accountTab}
		<Tabs.Content value={accountTab.value}>
			{#await Promise.all([accountTab.content])}
				<Skeleton class="h-56 w-full rounded" />
			{:then [tab]}
				<svelte:component this={tab} form={accountTab.form} />
			{/await}
		</Tabs.Content>
	{/each}
</Tabs.Root>
