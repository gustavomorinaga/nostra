<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Input, Label } from '@nostra/ui/components';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let data;
	export let form;

	let { session, profile } = data;
	$: ({ session, profile } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let fullName: string = profile?.full_name ?? '';
	let username: string = profile?.username ?? '';
	let website: string = profile?.website ?? '';
	let avatarUrl: string = profile?.avatar_url ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;

		return async () => {
			loading = false;
		};
	};

	const handleSignOut: SubmitFunction = () => {
		loading = true;

		return async ({ update }) => {
			loading = false;
			update();
		};
	};
</script>

<svelte:head>
	<title>Account | Nostra</title>
	<meta name="description" content="Nostra account" />
</svelte:head>

<div class="form-widget">
	<form
		class="form-widget"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<Label for="email">Email</Label>
			<Input id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<Label for="fullName">Full Name</Label>
			<Input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
		</div>

		<div>
			<Label for="username">Username</Label>
			<Input id="username" name="username" type="text" value={form?.username ?? username} />
		</div>

		<div>
			<Label for="website">Website</Label>
			<Input id="website" name="website" type="url" value={form?.website ?? website} />
		</div>

		<div>
			<Button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Update'}</Button>
		</div>
	</form>

	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<Button variant="ghost" type="submit" disabled={loading}>
				{loading ? 'Loading...' : 'Sign Out'}
			</Button>
		</div>
	</form>

	<Button variant="link" href="/">Go Home</Button>
</div>
