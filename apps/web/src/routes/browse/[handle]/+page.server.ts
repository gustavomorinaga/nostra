import { medusa } from '$lib/servers';
import type { ProductDTO } from '@medusajs/types';

export const load = async ({ params: { handle } }) => {
	const product = (await medusa.getProduct(handle)) as ProductDTO;

	return {
		product,
		relatedProducts: medusa.getProducts() as Promise<ProductDTO[]>,
		reviews: medusa.getReviews(product.id) as Promise<object[]>,
		discussions: []
	};
};
