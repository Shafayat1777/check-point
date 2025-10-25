import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

export const DATABASE_URL = process.env.DATABASE_URL!;
export const RESEND_API_KEY = process.env.RESEND_API_KEY!;