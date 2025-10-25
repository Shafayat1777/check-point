import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { auth } from '@/lib/auth';

import routes from './routes';

const app = new Hono().basePath('/api');

app.use(
    '/api/auth/*', // or replace with "*" to enable cors for all routes
    cors({
        origin: 'http://localhost:3000', // replace with your origin
        allowHeaders: ['Content-Type', 'Authorization'],
        allowMethods: ['POST', 'GET', 'OPTIONS'],
        exposeHeaders: ['Content-Length'],
        maxAge: 600,
        credentials: true,
    }),
);

app.on(['POST', 'GET'], '/auth/*', (c) => auth.handler(c.req.raw)).route(
    '/',
    routes,
);

export default {
    port: 3000,
    fetch: app.fetch,
};
