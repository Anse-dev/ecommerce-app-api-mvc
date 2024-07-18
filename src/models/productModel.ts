import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    name: String;
    price: number;
    description: string;
    category: string;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }

}, {
    timestamps: true
})
const productModel = mongoose.model<IProduct>('Product', productSchema);

export default productModel;