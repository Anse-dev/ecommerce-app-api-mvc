import express from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/productController";

const ProductRouter = express.Router();

ProductRouter.route('/').get(getProducts).post(createProduct);
ProductRouter.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

export default ProductRouter;