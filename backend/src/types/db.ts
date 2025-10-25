import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { gamesTable } from '@/db/schema/games';

export type Games = InferSelectModel<typeof gamesTable>;
export type NewGame = InferInsertModel<typeof gamesTable>;