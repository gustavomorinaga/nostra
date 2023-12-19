<script lang="ts" context="module">
	import { Button } from '@nostra/ui/components';
	import { InputWithIcon } from '$lib/components';
</script>

<section class="newsletter">
	<header>
		<h2>Subscribe to our newsletter to get updates to our latest collections</h2>
		<p>Get 20% off on your first order just by subscribing to our newsletter</p>
	</header>

	<form class="subscription">
		<InputWithIcon type="email" icon="ph:envelope" placeholder="Enter your email..." />
		<Button type="submit">Subscribe</Button>
	</form>

	<footer>
		<small>You will be able to unsubscribe at any time.</small>
		<small>Read our Privacy Policy <a href="/">here</a>.</small>
	</footer>
</section>

<style lang="postcss">
	section.newsletter {
		@apply mb-16 grid place-items-center gap-y-6 text-center;

		& > header {
			& > h2 {
				@apply mb-4 max-w-2xl p-0 text-3xl font-bold;
			}

			& > p {
				@apply m-0;
			}
		}

		& form.subscription {
			@apply flex items-center gap-2;
		}

		& > footer {
			@apply flex flex-col gap-1 text-muted-foreground;

			& > small {
				@apply font-light;

				& > a {
					@apply font-semibold underline;
				}
			}
		}
	}
</style>
