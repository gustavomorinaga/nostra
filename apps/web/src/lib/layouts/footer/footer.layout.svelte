<script lang="ts" context="module">
	import { Separator } from '@nostra/ui/components';

	const images = {
		logo: '/images/svgs/logo-min.svg'
	};

	const routes = [
		{
			category: 'Shop',
			links: [
				{
					name: 'All Collections',
					path: '/shop/all-collections'
				},
				{
					name: 'Winter Edition',
					path: '/shop/winter-edition'
				},
				{
					name: 'Discount',
					path: '/shop/discount'
				}
			]
		},
		{
			category: 'Company',
			links: [
				{
					name: 'About Us',
					path: '/company/about-us'
				},
				{
					name: 'Contact',
					path: '/company/contact'
				},
				{
					name: 'Affiliates',
					path: '/company/affiliates'
				}
			]
		},
		{
			category: 'Support',
			links: [
				{
					name: 'FAQs',
					path: '/support/faqs'
				},
				{
					name: 'Cookie Policy',
					path: '/support/cookie-policy'
				},
				{
					name: 'Terms of Use',
					path: '/support/terms-of-use'
				}
			]
		}
	];

	const paymentMethods = [
		{
			name: 'Mastercard',
			icon: 'logos:mastercard'
		},
		{
			name: 'Visa',
			icon: 'logos:visa'
		},
		{
			name: 'Paypal',
			icon: 'logos:paypal'
		}
	];
</script>

<footer>
	<div class="wrapper">
		<div>
			<div>
				<a class="logo" href="/">
					<figure>
						<img src={images.logo} alt="Logo" width="120" height="20" />
					</figure>
				</a>

				<p class="slogan">
					Specializes in providing high-quality, stylish products for your wardrobe
				</p>
			</div>

			{#each routes as route}
				<div>
					<span>{route.category}</span>
					<ul>
						{#each route.links as link}
							<li>
								<a href={link.path}>{link.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<div>
				<span>Payment Methods</span>

				<ul class="payment-methods">
					{#each paymentMethods as paymentMethod}
						<li>
							<iconify-icon icon={paymentMethod.icon} />
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<Separator class="my-8" />

		<small>Copyright &copy; 2023 Nostra, All right reserved</small>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply bg-muted p-10 text-muted-foreground;

		& > div.wrapper {
			@apply container;

			& > div {
				@apply grid place-items-start gap-x-4 gap-y-8 pb-4 md:grid-flow-col;

				& > div {
					@apply flex flex-col gap-4;

					& > a.logo {
						@apply mb-4 text-xl normal-case;

						& > figure {
							@apply overflow-hidden object-contain;
						}
					}

					& > p.slogan {
						@apply m-0 max-w-xs text-sm;
					}

					& > span {
						@apply font-heading text-sm font-semibold uppercase;
					}

					& > ul {
						@apply m-0 flex list-none flex-col gap-2;

						&.payment-methods {
							@apply flex-row gap-4;
						}

						& > li {
							@apply m-0 p-0;

							& > a {
								@apply text-sm hover:underline;
							}
						}
					}
				}
			}

			& > small {
				@apply mx-auto block text-center font-light;
			}
		}
	}
</style>
