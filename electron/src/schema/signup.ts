import * as z from 'zod';

export const SIGNUP_SCHEMA = z
    .object({
        name: z
            .string()
            .min(4, 'Name is required')
            .max(128, 'Name is too long'),
        email: z.email(),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .max(128, 'Password must be less than 128 characters.')
            .regex(/(?=.*[a-z])/, 'Password must include lowercase.')
            .regex(/(?=.*[A-Z])/, 'Password must include uppercase.')
            .regex(/(?=.*\d)/, 'Password must include number.')
            .regex(/(?=.*[^\w\s])/, 'Password must include symbol.')
            .regex(/^\S*$/, 'Password must not contain spaces.'),
        confirm_password: z.string(),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirm_password) {
            ctx.addIssue({
                code: 'custom',
                path: ['confirm_password'],
                message: 'Passwords must match.',
            });
        }
    });

export const SIGNUP_DEFAULT_SCHEMA: Partial<ISignupSchema> = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
};

export type ISignupSchema = z.infer<typeof SIGNUP_SCHEMA>;
