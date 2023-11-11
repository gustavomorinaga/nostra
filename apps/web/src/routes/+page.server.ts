import { medusa } from '$lib/servers';
import type { ProductDTO } from '@medusajs/types';

export const load = async () => {
	return { products: medusa.getProducts() as Promise<ProductDTO[]> };
};
