<script lang="ts" context="module">
	import {
		AnnouncementSignUp,
		CarouselBanner,
		CarouselFeaturedProducts,
		Newsletter,
		USP
	} from '$lib/layouts';

	const images = {
		couple: {
			src: '/images/jpgs/banner-couple.jpg',
			alt: 'Banner Couple'
		},
		winter: {
			src: '/images/jpgs/banner-winter.jpg',
			alt: 'Banner Winter'
		}
	};

	const banners = [
		{
			title: 'Level up your style with our winter collections',
			image: images.winter,
			link: '/shop/winter-edition'
		},
		{
			title: 'Check out our new casual collections',
			image: images.couple,
			link: '/shop/casual'
		}
	];
</script>

<script lang="ts">
	export let data;
	const { products } = data;
</script>

<svelte:head>
	<title>Nostra</title>
	<meta
		name="description"
		content="Log in to Nostra store and access exclusive deals on the latest fashion trends. Shop with ease and security using our trusted authentication system. Join our community of fashion enthusiasts today!"
	/>
</svelte:head>

<AnnouncementSignUp />
<CarouselBanner {banners} />
<USP />
<CarouselFeaturedProducts {products} />
<Newsletter />
