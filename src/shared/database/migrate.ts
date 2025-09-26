import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './connection';
import path from 'path';

export async function runMigrations(): Promise<void> {
  const migrationsPath = path.join(process.cwd(), 'migrations');

  try {
    await migrate(db, { migrationsFolder: migrationsPath });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
}
