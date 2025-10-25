import { desc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { gamesTable } from '@/db/schema/games';
import type { Games, NewGame } from '@/types/db';

export const insertGame = async (game: NewGame) => {
    const [result] = await db.insert(gamesTable).values(game).returning();

    return result;
};

export const getGamesByUserId = async (userId: string) => {
    const result = await db
        .select()
        .from(gamesTable)
        .where(eq(gamesTable.userID, userId))
        .orderBy(desc(gamesTable.createdAt));

    return result;
};
