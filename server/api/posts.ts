// server/api/posts.ts
import db from "../utils/db";

export default defineEventHandler(() => {
  const stmt = db.prepare("SELECT * FROM posts");
  const posts = stmt.all();
  return posts;
});
