import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { TOffer } from '$lib/layouts';

type TOfferState = {
	offers: Array<TOffer>;
};

const OFFER_CTX = 'OFFER_CTX';
const OFFER_INITIAL_STATE: TOfferState = {
	offers: []
};

export const setOfferState = (initialData: Partial<TOfferState> = OFFER_INITIAL_STATE) => {
	const offerState = writable(initialData);
	setContext(OFFER_CTX, offerState);

	return offerState;
};

export const getOfferState = () => getContext<Writable<TOfferState>>(OFFER_CTX);
