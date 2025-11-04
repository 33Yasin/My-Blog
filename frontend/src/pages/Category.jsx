import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import BlogCard from "../components/BlogCard";
import React from "react";

const Category = () => {
  const { category } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchCategoryBlogs = async () => {
      const res = await api.get(`/blogs/category/${category}`);
      setBlogs(res.data);
    };
    fetchCategoryBlogs();
  }, [category]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{category} Blogları</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p>Bu kategoride blog bulunmuyor.</p>
        )}
      </div>
    </div>
  );
};

export default Category;