<script lang="ts" context="module">
	import {
		AnnouncementSignUp,
		CarouselBanner,
		CarouselCuratedPicks,
		CarouselFeaturedProducts,
		Newsletter,
		USP,
		type TBanner,
		type TPick
	} from '$lib/layouts';

	const images = {
		couple: {
			src: '/images/jpgs/banner-couple.jpg',
			alt: 'Banner Couple'
		},
		winter: {
			src: '/images/jpgs/banner-winter.jpg',
			alt: 'Banner Winter'
		},
		'best-sellers': {
			src: '/images/jpgs/best-seller.jpg',
			alt: 'Best Sellers'
		},
		men: {
			src: '/images/jpgs/men.jpg',
			alt: 'Men'
		},
		women: {
			src: '/images/jpgs/women.jpg',
			alt: 'Women'
		},
		casual: {
			src: '/images/jpgs/casual.jpg',
			alt: 'Casual'
		}
	};

	const banners: Array<TBanner> = [
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

	const picks: Array<TPick> = [
		{
			handle: 'best-sellers',
			title: 'Best Sellers',
			image: images['best-sellers'],
			link: '/shop/best-sellers'
		},
		{
			handle: 'men',
			title: 'Shop Men',
			image: images.men,
			link: '/shop/men'
		},
		{
			handle: 'women',
			title: 'Shop Women',
			image: images.women,
			link: '/shop/women'
		},
		{
			handle: 'casual',
			title: 'Shop Casual',
			image: images.casual,
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
<CarouselCuratedPicks {picks} />
<CarouselFeaturedProducts {products} />
<Newsletter />
