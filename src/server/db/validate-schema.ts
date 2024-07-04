import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { users } from './schema';
import { z } from 'zod';

export const createUserSchema = createInsertSchema(users, {
  email: z.string().email()
});

export const updateUserSchema = createUserSchema.pick({ email: true })