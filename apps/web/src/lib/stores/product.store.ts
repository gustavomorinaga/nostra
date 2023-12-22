import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import type { ProductDTO } from 'sveltekit-medusa-client';

type TProductState = {
	products: Array<ProductDTO>;
	product?: ProductDTO;
};

const PRODUCT_CTX = 'PRODUCT_CTX';
const ARTICLE_INITIAL_STATE: TProductState = {
	products: [],
	product: undefined
};

export const setProductState = (initialData: Partial<TProductState> = ARTICLE_INITIAL_STATE) => {
	const productState = writable(initialData);
	setContext(PRODUCT_CTX, productState);

	return productState;
};

export const getProductState = () => getContext<Writable<TProductState>>(PRODUCT_CTX);
