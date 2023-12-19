export const load = async ({ locals, params: { handle } }) => {
	const product = await locals.medusa.getProduct(handle);
	const relatedProducts = await locals.medusa.getProducts();
	const reviews: Array<object> = product ? await locals.medusa.getReviews(product.id) : [];
	const discussions: Array<object> = [];

	return { product, relatedProducts, reviews, discussions };
};
