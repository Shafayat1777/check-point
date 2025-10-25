import { Hono } from 'hono';

import { authMiddleware } from '@/middlewares/auth-middleware';
import type { HonoEnv } from '@/types';

import { getGamesByUserId, insertGame } from './query';
import { validator } from './validator';

const games = new Hono<HonoEnv>();

games.use(authMiddleware);

games.get('/', async (c) => {
    const user = c.get('user');

    try {
        const games = await getGamesByUserId(user.id);
        return c.json(games);
    } catch (e) {
        console.error('Error getting games: ', e);
        return c.json({ error: 'Error getting games' }, 500);
    }
});

games.post('/', validator, async (c) => {
    const user = c.get('user');
    const data = c.req.valid('json');

    try {
        const newGame = await insertGame({ ...data, userID: user.id });
        return c.json(newGame, 201);
    } catch (e) {
        console.error('Error creating game: ', e);
        return c.json({ error: 'Error creating game' }, 500);
    }
});

export default games;
