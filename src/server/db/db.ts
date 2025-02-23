import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';

// for query purposes
const queryClient = postgres("postgres://postgres:123456@localhost:5432/postgres");
export const db = drizzle(queryClient, { schema });
