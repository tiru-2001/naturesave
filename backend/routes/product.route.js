import express from 'express';
import {
  addproduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
} from '../controllers/product.controllers.js';
import upload from '../middlewares/uploadphoto/uploadphoto.js';
const router = express.Router();
router.post('/add-product', addproduct);
router.get('/getallproducts', getAllProducts);
router.get('/getindiproduct/:slug', getProductBySlug);
router.get('/getproductbyid/:id', getProductById);

export default router;
// upload.single('img')
