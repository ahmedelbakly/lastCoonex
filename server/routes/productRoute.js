import { Router } from "express";
import {
  createAdForRent,
  createAdForSale,
} from "../controller/productController.js";
const router = Router();
import {uploadMulti } from "../multer.js";

// define the home page route

router.post(
  "/adSale",
  uploadMulti,
  createAdForSale
);
router.post(
  "/adRent",
  uploadMulti,
  createAdForRent
);

export default router;
