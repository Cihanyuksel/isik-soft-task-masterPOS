import { Router } from "express";
import { getProducts } from "../controllers/product.controler";

const router = Router();

router.get("/", getProducts);

export default router;
