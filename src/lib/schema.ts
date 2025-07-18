import { pgTable, text, serial, pgEnum } from 'drizzle-orm/pg-core';

export const rolesEnum = pgEnum('roles', ['admin', 'user']);

// This is an example table, feel free to edit it or add your own.
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  role: rolesEnum('role').default('user'),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
