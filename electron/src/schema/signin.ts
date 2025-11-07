import * as z from 'zod';

export const SIGNIN_SCHEMA = z.object({
    email: z.email('Email is required'),
    password: z
        .string()
        .min(1, 'Password is required')
        .max(128, 'Password must be less than 128 characters.'),
});

export const SIGNIN_DEFAULT_SCHEMA: Partial<ISigninSchema> = {
    email: '',
    password: '',
};

export type ISigninSchema = z.infer<typeof SIGNIN_SCHEMA>;