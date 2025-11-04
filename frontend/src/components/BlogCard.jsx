import { Link } from "react-router-dom";
import React, { useState } from "react";
import { api } from "../services/api";

const BlogCard = ({ blog, onBlogDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("Bu blogu silmek istediğinize emin misiniz?")) {
      try {
        setIsDeleting(true);
        await api.delete(`/blogs/${blog.id}`);
        onBlogDeleted(); // Parent komponenti bilgilendir
      } catch (err) {
        console.error("Blog silinirken hata oluştu:", err);
        alert("Blog silinirken bir hata oluştu.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="group border-b border-gray-200 py-6 relative hover:bg-gray-50 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-start gap-4">
          {blog.image_url ? (
            <img src={blog.image_url} alt={blog.title} className="w-24 h-24 object-cover rounded-sm shrink-0" />
          ) : (
            <div className="w-24 h-24 rounded-sm shrink-0 bg-gray-100 flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </div>
          )}
          <div className="grow">
            <Link to={`/blog/${blog.id}`} className="block group">
              <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                📅 {new Date(blog.created_at).toLocaleDateString()}
              </p>
              <p className="text-gray-600 line-clamp-2">
                {blog.content}
              </p>
            </Link>
          </div>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-gray-400 hover:text-red-500 transition-colors p-2"
            title="Blogu Sil"
          >
            {isDeleting ? (
              <span className="animate-spin">↻</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;