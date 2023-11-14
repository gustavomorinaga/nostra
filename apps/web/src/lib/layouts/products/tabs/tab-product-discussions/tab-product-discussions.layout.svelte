<script lang="ts" context="module">
	import { Button, Card, Label, Select, Textarea } from '@nostra/ui/components';

	const sortByOptions = [
		{
			label: 'Newest',
			value: 'newest'
		},
		{
			label: 'Oldest',
			value: 'oldest'
		},
		{
			label: 'Most helpful',
			value: 'most-helpful'
		},
		{
			label: 'Least helpful',
			value: 'least-helpful'
		}
	] as const;
</script>

<script lang="ts">
	export let discussions: Array<object> = [];

	let sortBy = sortByOptions.at(0);
</script>

<section class="discussions">
	<h2>Discussion</h2>

	<header>
		<div class="filter">
			<Label class="text-muted-foreground" for="sortBy">Sort by</Label>

			<Select.Root selected={sortBy}>
				<Select.Trigger class="w-40" id="sortBy">
					<Select.Value placeholder="Select an option" />
				</Select.Trigger>
				<Select.Content>
					{#each sortByOptions as { label, value }}
						<Select.Item {value}>
							{label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
	</header>

	<Card.Root>
		<Card.Content class="p-6">
			<Textarea placeholder="Question/topic" />
		</Card.Content>

		<Card.Footer>
			<Button>Start discussion</Button>
		</Card.Footer>
	</Card.Root>
</section>

<style lang="postcss">
	section.discussions {
		@apply mt-8;

		& > h2 {
			@apply text-2xl;
		}

		& > header {
			@apply mb-8 flex items-center gap-4;

			& > div.filter {
				@apply inline-flex items-center gap-2;
			}
		}
	}
</style>
