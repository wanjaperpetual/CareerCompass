import { pgTable, text, serial } from 'drizzle-orm/pg-core';

// This is an example table, feel free to edit it or add your own.
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;