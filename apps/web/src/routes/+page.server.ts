import type { ProductDTO } from '@medusajs/types';

export const load = async ({ locals }) => {
	return { products: locals.medusa.getProducts() as Promise<Array<ProductDTO>> };
};
