import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { TBanner } from '$lib/layouts';

type TBannerState = {
	banners: Array<TBanner>;
};

const BANNER_CTX = 'BANNER_CTX';
const BANNER_INITIAL_STATE: TBannerState = {
	banners: []
};

export const setBannerState = (initialData: Partial<TBannerState> = BANNER_INITIAL_STATE) => {
	const bannerState = writable(initialData);
	setContext(BANNER_CTX, bannerState);

	return bannerState;
};

export const getBannerState = () => getContext<Writable<TBannerState>>(BANNER_CTX);
