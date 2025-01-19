import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { int, sqliteTable, text, real  } from "drizzle-orm/sqlite-core";

const client = createClient({ 
  url: process.env.TURSO_DATABASE_URL!, 
  authToken: process.env.TURSO_AUTH_TOKEN!
});
export const db = drizzle({ client });



export const menusTable = sqliteTable("menus", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  deskripsi:text().notNull(),
  program:text().notNull(),
  kalori:int().notNull(),
  protein:real().notNull(),
  karbohidrat:real().notNull(),
  lemak:real().notNull(),
});

