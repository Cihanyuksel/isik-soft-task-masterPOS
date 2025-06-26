// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: Number,
//   productCode: String,
//   barcode: String,
//   stock: Number,
//   status: Boolean,
//   category: String,
//   description: String,
//   imageUrl: String,
// });

// export const Product = mongoose.model("Product", productSchema);

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
  // id: { type: String, required: true, unique: true },
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
