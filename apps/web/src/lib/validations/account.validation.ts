import { z } from 'zod';

export const accountValidationSchema = z.object({
	email: z.string().email(),
	fullName: z.string().min(3).max(255),
	username: z.string().min(3).max(255),
	website: z.string().url().optional()
});

export type TAccountValidationSchema = typeof accountValidationSchema;
