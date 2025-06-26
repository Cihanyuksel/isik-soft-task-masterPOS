import { Request, Response } from "express";
import { Product } from "../models/product.model";
import { paginate } from "../utils/paginate";

export const getProducts = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const totalItems = await Product.countDocuments();
  const { totalPages, skip, limit } = paginate(page, totalItems);

  const data = await Product.find().skip(skip).limit(limit);

  res.json({
    message: "Ürünler başariyla getirildi",
    status: "success",
    currentPage: page,
    totalPages,
    totalItems,
    data,
  });
};
