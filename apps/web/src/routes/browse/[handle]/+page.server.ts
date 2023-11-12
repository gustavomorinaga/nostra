import { medusa } from '$lib/servers';
import type { ProductDTO } from '@medusajs/types';

export const load = async ({ params: { handle } }) => {
	return { product: medusa.getProduct(handle) as Promise<ProductDTO> };
};
