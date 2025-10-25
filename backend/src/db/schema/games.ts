import {
    boolean,
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from 'drizzle-orm/pg-core';

import { user } from './users';

export const gamesTable = pgTable('games', {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({ length: 255 }).notNull(),
    userID: text('user_id')
        .notNull()
        .references(() => user.id, { onDelete: 'cascade' }),
    synced: boolean().default(false),
    createdAt: timestamp({ withTimezone: true }).defaultNow(),
    updatedAt: timestamp({ withTimezone: true }).defaultNow(),
});
