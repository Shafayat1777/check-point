// Make sure to install the 'pg' package
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { DATABASE_URL } from '@/lib/secret';

const pool = new Pool({
    connectionString: DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
});

export const db = drizzle({ client: pool, casing: 'snake_case' });
