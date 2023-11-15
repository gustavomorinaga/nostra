import type { CartDTO } from '@medusajs/types';

export const load = async ({ locals, cookies }) => {
	return { session: locals.getSession(), cart: locals.medusa.getCart(locals, cookies) as CartDTO };
};
