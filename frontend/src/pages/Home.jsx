import { useEffect, useState } from "react";
import { api } from "../services/api";
import BlogCard from "../components/BlogCard";
import BlogForm from "../components/BlogForm";
import React from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const res = await api.get("/blogs");
        setBlogs(res.data);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-5xl mx-auto pt-8 pb-16">
                <h1 className="text-3xl font-bold text-gray-900 px-4 mb-8">Tüm Bloglar</h1>
                <div className="divide-y divide-gray-200">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            onBlogDeleted={fetchBlogs}
                        />
                    ))}
                </div>
                <div className="mt-12 px-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Yeni Blog Ekle</h2>
                    <BlogForm onBlogAdded={fetchBlogs} />
                </div>
            </div>
        </div>
    );
};

export default Home;