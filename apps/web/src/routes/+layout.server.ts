import type { CartDTO } from '@medusajs/types';

export const load = async ({ locals, cookies }) => {
	const [session, cart] = await Promise.all([locals.getSession(), locals.medusa.getCart(locals, cookies) as Promise<CartDTO>]);

	return { session, cart };
};
