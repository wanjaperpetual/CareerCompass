import { pgTable, text, serial, pgEnum, integer, timestamp } from 'drizzle-orm/pg-core';

export const rolesEnum = pgEnum('roles', ['student', 'admin']);
export const jobStatusEnum = pgEnum('job_status', ['saved', 'applied']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  role: rolesEnum('role').default('student'),
  profileStrength: integer('profile_strength'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const aiLogs = pgTable('ai_logs', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    tool: text('tool'),
    prompt: text('prompt'),
    response: text('response'),
    timestamp: timestamp('timestamp').defaultNow(),
});

export const savedJobs = pgTable('saved_jobs', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    jobTitle: text('job_title'),
    company: text('company'),
    status: jobStatusEnum('status').default('saved'),
    createdAt: timestamp('created_at').defaultNow(),
});

export const skillResults = pgTable('skill_results', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    skillArea: text('skill_area'),
    score: integer('score'),
    completedAt: timestamp('completed_at'),
});

export const uniSearchLogs = pgTable('uni_search_logs', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    searchQuery: text('search_query'),
    recommendedUni: text('recommended_uni'),
    timestamp: timestamp('timestamp'),
});


export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
