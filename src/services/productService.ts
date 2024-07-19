import Product, { IProduct } from '../models/productModel';

export const getProducts = async (): Promise<IProduct[]> => {
    return await Product.find().populate('category');
};

export const getProductById = async (id: string): Promise<IProduct | null> => {
    return await Product.findById(id).populate('category');
};

export const createProduct = async (data: IProduct): Promise<IProduct> => {
    const product = new Product(data);
    return await product.save();
};

export const updateProduct = async (id: string, data: Partial<IProduct>): Promise<IProduct | null> => {
    return await Product.findByIdAndUpdate(id, data, { new: true }).populate('category');
};

export const deleteProduct = async (id: string): Promise<IProduct | null> => {
    return await Product.findByIdAndDelete(id);
};
