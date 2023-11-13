<script lang="ts" context="module">
	import { Button } from '@nostra/ui/components';

	const images = { notFound: '/images/svgs/not-found.svg' };
</script>

<section class="error">
	<div>
		<img src={images.notFound} alt="Not Found" />

		<div>
			<h1>I have bad news for you</h1>
			<p>The page are you looking for might be removed or is temporarily unavailable</p>

			<Button href="/">Come Home</Button>
		</div>
	</div>
</section>

<style lang="postcss">
	section.error {
		@apply mt-16 block;

		& > div {
			@apply flex max-w-none flex-col justify-between gap-8 p-0 lg:flex-row-reverse;

			& > img {
				@apply w-72 lg:w-1/2;
			}

			& > div {
				@apply my-auto block;

				& > h1 {
					@apply mb-4 text-5xl font-bold;
				}

				& > p {
					@apply mb-8 text-lg;
				}

				/* & > a {
					@apply btn-primary btn;
				} */
			}
		}
	}
</style>
