<!-- @component Unique Selling Proposition (USP) -->

<script lang="ts" context="module">
	import { Icon } from '@nostra/ui/components';

	const benefits = [
		{
			icon: 'ph:money',
			title: 'Original Products',
			description: 'We provide money back guarantee if the product are not original'
		},
		{
			icon: 'ph:mask-happy',
			title: 'Satisfaction Guarantee',
			description: "Exchange the product you've purchased if it doesn't fit on you"
		},
		{
			icon: 'ph:package',
			title: 'New Arrival Everyday',
			description: 'We updates our collections almost everyday'
		},
		{
			icon: 'ph:truck',
			title: 'Fast & Free Shipping',
			description: 'We offer fast and free shipping for our loyal customers'
		}
	] as const;
</script>

<section class="usp">
	<header>
		<h2>We provide best customer experiences</h2>

		<blockquote>We ensure our customers have the best shopping experience</blockquote>
	</header>

	<ul>
		{#each benefits as benefit}
			<li>
				<Icon class="rounded bg-muted p-2 text-4xl" icon={benefit.icon} />
				<h3>{benefit.title}</h3>
				<p>{benefit.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	section.usp {
		@apply mb-16 block;

		& header {
			@apply mb-8 flex justify-between;

			& > h2 {
				@apply max-w-sm text-3xl font-bold;
			}

			& > blockquote {
				@apply my-auto block w-72 border-l-2 border-primary p-4 lg:w-fit;
			}
		}

		& > ul {
			@apply m-0 flex list-none flex-row flex-wrap gap-8;

			& > li {
				@apply min-w-[18rem] flex-1;

				& > h3 {
					@apply my-2 text-xl font-bold;
				}

				& > p {
					@apply m-0;
				}
			}
		}
	}
</style>
