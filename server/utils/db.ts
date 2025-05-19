// server/utils/db.ts
import Database from "better-sqlite3";
import { join } from "path";

// Build path to your SQLite file
const dbPath = join(process.cwd(), "server", "db", "articles.sqlite");

// Connect to SQLite database
const db = new Database(dbPath);

// Export the connection
export default db;
