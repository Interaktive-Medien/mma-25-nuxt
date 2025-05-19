import db from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { title, content } = body;

  //   console.log("body in createPost", body);

  if (!title) {
    throw createError({ statusCode: 400, statusMessage: "Title is required" });
  }

  const stmt = db.prepare("INSERT INTO posts (title, content) VALUES (?, ?)");
  const result = stmt.run(title, content);

  const newPost = {
    id: result.lastInsertRowid,
    title,
    content,
  };

  return newPost;
});
