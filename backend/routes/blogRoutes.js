import express from 'express';
import {
  getAllBlogsController,
  getBlogsByCategoryController,
  getBlogController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
} from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAllBlogsController);
router.get('/category/:category', getBlogsByCategoryController);
router.get('/:id', getBlogController);
router.post('/', createBlogController);
router.put('/:id', updateBlogController);
router.delete('/:id', deleteBlogController);

export default router;