import { z } from 'zod';

const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/;
const ERROR_MESSAGES = {
	min: 'Password must be at least 6 characters',
	max: 'Password must be less than 20 characters',
	regex:
		'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
	match: 'Passwords do not match'
};

export const managePasswordValidationSchema = z
	.object({
		oldPassword: z.string().min(6, ERROR_MESSAGES.min),
		newPassword: z
			.string()
			.min(6, ERROR_MESSAGES.min)
			.max(20, ERROR_MESSAGES.max)
			.regex(PASSWORD_REGEX, ERROR_MESSAGES.regex),
		confirmNewPassword: z.string().min(6, ERROR_MESSAGES.min)
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		message: ERROR_MESSAGES.match,
		path: ['confirmNewPassword']
	});

export type TManagePasswordValidationSchema = typeof managePasswordValidationSchema;
