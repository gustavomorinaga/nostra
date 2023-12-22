import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { TPick } from '$lib/layouts';

type TPickState = {
	picks: Array<TPick>;
};

const PICK_CTX = 'PICK_CTX';
const PICK_INITIAL_STATE: TPickState = {
	picks: []
};

export const setPickState = (initialData: Partial<TPickState> = PICK_INITIAL_STATE) => {
	const pickState = writable(initialData);
	setContext(PICK_CTX, pickState);

	return pickState;
};

export const getPickState = () => getContext<Writable<TPickState>>(PICK_CTX);
