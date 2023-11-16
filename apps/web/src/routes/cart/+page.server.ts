export const load = async ({ parent }) => {
	const { cart } = await parent();
	return { cart };
};
