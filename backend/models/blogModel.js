import pool from "../config/db.js";

export const getAllBlogs = async () => {
  const result = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
  return result.rows;
};

export const getBlogsByCategory = async (category) => {
  const result = await pool.query('SELECT * FROM blogs WHERE category = $1 ORDER BY created_at DESC', [category]);
  return result.rows;
};

export const getBlogById = async (id) => {
  const result = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
  return result.rows[0];
};

export const createBlog = async ({ title, content, image_url, category }) => {
  const result = await pool.query(
    'INSERT INTO blogs (title, content, image_url, category) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, content, image_url, category]
  );
  return result.rows[0];
};

export const updateBlog = async (id, { title, content, image_url, category }) => {
  const result = await pool.query(
    'UPDATE blogs SET title=$1, content=$2, image_url=$3, category=$4 WHERE id=$5 RETURNING *',
    [title, content, image_url, category, id]
  );
  return result.rows[0];
};

export const deleteBlog = async (id) => {
  await pool.query('DELETE FROM blogs WHERE id = $1', [id]);
};