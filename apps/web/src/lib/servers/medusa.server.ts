import { MedusaClient } from 'sveltekit-medusa-client';
import { MEDUSA_BACKEND_URL } from '$env/static/private';

export const medusa = new MedusaClient(MEDUSA_BACKEND_URL, {
	retry: 1,
	persistentCart: true,
	logLevel: 'silent'
});
