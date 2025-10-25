import { Hono } from 'hono';

const user = new Hono();

user.get('/', (c) => c.text('Hello User!' + process.env.DATABASE_URL));
user.get('/:id', (c) => c.text(`Hello ${c.req.param('id')}!`));

export default user;
