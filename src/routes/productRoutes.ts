import express from "express"
import { getProducts } from "../controllers/productController";

const ProductRouter = express.Router();

ProductRouter.route('/').get(getProducts)

export default ProductRouter;