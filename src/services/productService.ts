import productModel, { IProduct } from "../models/productModel";

export const getProducts = async (): Promise<IProduct[]> => {
    return productModel.find();
}


export const getProductsByCategoryId = async (categoryId: String): Promise<IProduct[]> => {
    return productModel.find({ category: categoryId });
}

export const getProductById = async (productId: String): Promise<IProduct | null> => {
    return productModel.findById(productId);
}

export const createProduct = async (product: IProduct): Promise<IProduct> => {
    return productModel.create(product);
}

export const updateProduct = async (productID: String, newProduct: IProduct): Promise<IProduct | null> => {
    return productModel.findByIdAndUpdate(productID, newProduct, {})
}


export const deleteProduct = async (productID: String): Promise<IProduct | null> => {
    return productModel.findOneAndDelete(productID)
}


