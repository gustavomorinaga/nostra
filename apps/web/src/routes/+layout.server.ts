import { medusa } from '$lib/servers';
import type { CartDTO } from '@medusajs/types';

export const load = async ({ locals, cookies }) => {
	return { session: locals.getSession(), cart: medusa.getCart(locals, cookies) as CartDTO };
};
