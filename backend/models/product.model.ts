import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  productCode: string;
  barcode: string;
  stock: number;
  status: boolean;
  category: string;
  description: string;
  imageUrl: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  productCode: { type: String, required: true },
  barcode: { type: String, required: true },
  stock: { type: Number, required: true },
  status: { type: Boolean, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
