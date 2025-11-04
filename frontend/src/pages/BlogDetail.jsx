import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";
import React from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await api.get(`/blogs/${id}`);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Yükleniyor...</p>;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Geri dön
      </Link>
      {blog.image_url && (
        <img src={blog.image_url} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      )}
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        🕓 {new Date(blog.created_at).toLocaleDateString()} | {blog.category}
      </p>
      <p className="text-gray-800 leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;