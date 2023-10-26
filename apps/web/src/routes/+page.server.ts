import { medusa } from '$lib/servers';
import type { ProductDTO } from '@medusajs/types';

export const load = async () => {
	const products = (await medusa.getProducts()) as ProductDTO[];

	return { products };
};
