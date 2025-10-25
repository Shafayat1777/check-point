import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

export const createGameSchema = z
    .object({
        title: z
            .string()
            .min(1, 'Title is required')
            .max(255, 'Title is too long'),
        synced: z.boolean().default(false),
    })
    .strict();

export const validator = zValidator('json', createGameSchema, (result, c) => {
    if (!result.success) {
        return c.json(
            { errors: result.error.issues.map((issue) => issue.message) },
            400,
        );
    }
});
