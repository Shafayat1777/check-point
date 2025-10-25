import { Hono } from 'hono';

import games from './games';
import saveFile from './save-file';
import user from './user';

const routes = new Hono();

routes.route('/users', user);
routes.route('/games', games);
routes.route('/save-files', saveFile);

export default routes;
