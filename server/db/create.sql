CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT
);

INSERT INTO posts (title, content) VALUES
  ('Post 1', 'Das ist der erste Inhalt.'),
  ('Post 2', 'Ein weiterer Post.'),
  ('Post 3', 'Noch ein Beispieltext.');
