export const load = async ({ locals }) => {
	const products = await locals.medusa.getProducts();

	return { products: products ?? [] };
};
