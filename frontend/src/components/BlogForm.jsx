import { useState } from "react";
import { api } from "../services/api";
import React from "react";

const BlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/blogs", formData);
      setFormData({ title: "", content: "", image_url: "", category: "" });
      onBlogAdded();
    } catch (err) {
      console.error(err);
      alert("Blog eklenirken hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <input
            name="title"
            placeholder="Başlık"
            value={formData.title}
            onChange={handleChange}
            className="h-12 px-4 bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] transition-colors"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            name="content"
            placeholder="İçerik"
            value={formData.content}
            onChange={handleChange}
            className="h-32 p-4 bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] transition-colors resize-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            name="image_url"
            placeholder="Görsel URL"
            value={formData.image_url}
            onChange={handleChange}
            className="h-12 px-4 bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="h-12 px-4 bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3] transition-colors appearance-none cursor-pointer"
            required
          >
            <option value="">Kategori Seç</option>
            <option value="sağlık">Sağlık</option>
            <option value="teknoloji">Teknoloji</option>
            <option value="spor">Spor</option>
            <option value="bilim">Bilim</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="h-12 px-6 bg-[#2196F3] text-white rounded-lg hover:bg-[#1976D2] transition-colors mt-2 font-medium text-[16px] shadow-[0_2px_4px_rgba(33,150,243,0.24)] hover:shadow-[0_4px_8px_rgba(33,150,243,0.32)]"
        >
          Blog Ekle
        </button>
      </div>
    </form>
  );
};

export default BlogForm;