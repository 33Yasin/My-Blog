import {
  getAllBlogs,
  getBlogsByCategory,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../models/blogModel.js';

// Tüm blogları getir
export const getAllBlogsController = async (req, res, next) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch (err) {
    next(err);
  }
};

// Kategoriye göre blogları getir
export const getBlogsByCategoryController = async (req, res, next) => {
  try {
    const { category } = req.params;
    const blogs = await getBlogsByCategory(category);
    res.json(blogs);
  } catch (err) {
    next(err);
  }
};

// Tek bir blog getir
export const getBlogController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await getBlogById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog bulunamadı' });
    }

    res.json(blog);
  } catch (err) {
    next(err);
  }
};

// Yeni blog oluştur (doğrulama eklenmiş)
export const createBlogController = async (req, res, next) => {
  try {
    const { title, content, image_url, category } = req.body;

    // Basit doğrulama
    if (!title || !content) {
      return res.status(400).json({ message: 'Başlık ve içerik zorunludur' });
    }

    // Tüm alanları gönder
    const newBlog = await createBlog({ 
      title, 
      content, 
      image_url: image_url || null, // image_url yoksa null olarak kaydet
      category 
    });

    res.status(201).json(newBlog);
  } catch (err) {
    next(err);
  }
};

// Blog güncelle (doğrulama eklenmiş)
export const updateBlogController = async (req, res, next) => {
  try {
    const { title, content, image_url, category } = req.body;

    // En az bir alan güncellenmeli
    if (!title && !content && image_url === undefined && !category) {
      return res.status(400).json({ message: 'Güncellenecek alan belirtilmedi' });
    }

    const updated = await updateBlog(req.params.id, {
      title,
      content,
      image_url: image_url || null,
      category,
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Blog sil
export const deleteBlogController = async (req, res, next) => {
  try {
    await deleteBlog(req.params.id);
    res.json({ message: 'Blog silindi' });
  } catch (err) {
    next(err);
  }
};