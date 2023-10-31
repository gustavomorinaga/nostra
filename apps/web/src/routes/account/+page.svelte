<script lang="ts">
	import { Tabs } from '@nostra/ui/components';

	export let data;
	export let form;

	const tabs = [
		{
			name: 'Account settings',
			value: 'account',
			content: import('$lib/layouts').then((m) => m.TabAccount)
		},
		{
			name: 'Manage password',
			value: 'manage-password',
			content: import('$lib/layouts').then((m) => m.TabManagePassword)
		},
		{
			name: 'Order history',
			value: 'order-history',
			content: import('$lib/layouts').then((m) => m.TabOrderHistory)
		},
		{
			name: 'Payment methods',
			value: 'payment-methods',
			content: import('$lib/layouts').then((m) => m.TabPaymentMethods)
		},
		{
			name: 'Address',
			value: 'address',
			content: import('$lib/layouts').then((m) => m.TabAddress)
		},
		{
			name: 'Notification',
			value: 'notification',
			content: import('$lib/layouts').then((m) => m.TabNotification)
		}
	];
</script>

<svelte:head>
	<title>Account | Nostra</title>
	<meta
		name="description"
		content="Manage your account settings, change your password, view your order history, add or remove payment methods, update your address, and customize your notification settings with Nostra's account management options."
	/>
</svelte:head>

<Tabs.Root value="account">
	<Tabs.List>
		{#each tabs as { name, value }}
			<Tabs.Trigger {value}>{name}</Tabs.Trigger>
		{/each}
	</Tabs.List>

	{#each tabs as { value, content }}
		<Tabs.Content {value}>
			{#await content then layout}
				<svelte:component this={layout} {data} {form} />
			{/await}
		</Tabs.Content>
	{/each}
</Tabs.Root>
