import type { ProductDTO } from '@medusajs/types';

export const load = async ({ locals, params: { handle } }) => {
	const product = (await locals.medusa.getProduct(handle)) as ProductDTO;

	return {
		product,
		relatedProducts: locals.medusa.getProducts() as Promise<Array<ProductDTO>>,
		reviews: locals.medusa.getReviews(product.id) as Promise<Array<object>>,
		discussions: []
	};
};
