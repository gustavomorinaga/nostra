import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

// Repositories
import { accountRepository, type TUpdateProfile } from '$lib/repositories';

// Validations
import {
	accountValidationSchema,
	addressValidationSchema,
	managePasswordValidationSchema,
	notificationValidationSchema,
	orderHistoryValidationSchema,
	paymentMethodsValidationSchema
} from '$lib/validations';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) throw redirect(303, '/');

	const { data: profile } = await accountRepository.getProfile({ id: session.user.id, supabase });

	const initialData = {
		account: {
			email: session.user.email,
			fullName: profile?.full_name,
			username: profile?.username,
			website: profile?.website
		},
		address: {},
		managePassword: {},
		notification: {},
		orderHistory: {},
		paymentMethods: {}
	};

	const forms = {
		accountForm: superValidate(initialData.account, accountValidationSchema, { id: 'accountForm' }),
		addressForm: superValidate(initialData.address, addressValidationSchema, { id: 'addressForm' }),
		managePasswordForm: superValidate(initialData.managePassword, managePasswordValidationSchema, {
			id: 'managePasswordForm',
			errors: false
		}),
		notificationForm: superValidate(initialData.notification, notificationValidationSchema, {
			id: 'notificationForm'
		}),
		orderHistoryForm: superValidate(initialData.orderHistory, orderHistoryValidationSchema, {
			id: 'orderHistoryForm'
		}),
		paymentMethodsForm: superValidate(initialData.paymentMethods, paymentMethodsValidationSchema, {
			id: 'paymentMethodsForm'
		})
	};

	return { session, profile, forms };
};

export const actions = {
	'account-update': async (event) => {
		const {
			locals: { supabase, getSession }
		} = event;
		const session = await getSession();

		const form = await superValidate(event, accountValidationSchema);
		if (!form.valid) return fail(400, { form });

		const data: TUpdateProfile['data'] = {
			id: session?.user.id,
			full_name: form.data.fullName,
			username: form.data.username,
			website: form.data.website,
			avatar_url: ''
		};

		const { error } = await accountRepository.updateProfile({ data, supabase });
		if (error) return fail(500, { form });

		return { form };
	},
	'account-signout': async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) return;

		await supabase.auth.signOut();
		throw redirect(303, '/');
	},

	'manage-password-update': async (event) => {
		const form = await superValidate(event, managePasswordValidationSchema);
		if (!form.valid) return fail(400, { form });

		return { form };
	},

	'order-history-update': async (event) => {
		const form = await superValidate(event, orderHistoryValidationSchema);
		if (!form.valid) return fail(400, { form });

		return { form };
	},

	'payment-methods-update': async (event) => {
		const form = await superValidate(event, paymentMethodsValidationSchema);
		if (!form.valid) return fail(400, { form });

		return { form };
	},

	'address-update': async (event) => {
		const form = await superValidate(event, addressValidationSchema);
		if (!form.valid) return fail(400, { form });

		return { form };
	},

	'notification-update': async (event) => {
		const form = await superValidate(event, notificationValidationSchema);
		if (!form.valid) return fail(400, { form });

		return { form };
	}
};
