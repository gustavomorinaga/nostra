<script lang="ts" context="module">
	import { Alert, Icon } from '@nostra/ui/components';
</script>

<script lang="ts">
	export let reviews: Array<object> = [];
	$: hasReviews = reviews?.length > 0;
</script>

<section class="details">
	<h2>Ratings & Reviews</h2>

	{#if hasReviews}
		{#each reviews as review}
			<span>{review}</span>
		{/each}
	{:else}
		<Alert.Root>
			<Icon class="absolute" icon="ph:star" />
			<div class="ml-6">
				<Alert.Title>No reviews yet</Alert.Title>
				<Alert.Description>Be the first to review this product!</Alert.Description>
			</div>
		</Alert.Root>
	{/if}
</section>

<style lang="postcss">
	section.details {
		& > h2 {
			@apply text-2xl;
		}

		& > p {
			@apply mt-2;
		}
	}
</style>
