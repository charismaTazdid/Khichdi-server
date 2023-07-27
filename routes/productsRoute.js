import express from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/products.js";

const router = express.Router();

// CREATE (Only admin can do that)
router.post('/create', createProduct);

// GET All Product
router.get('/getAll', getAllProduct);

// GET single Product
router.get('/getOne/:productId', getSingleProduct);

// UPDATE one Product with Id (Only admin can do that)
router.put('/update/:productId', updateProduct);

// DELETE product (Only admin can do that)
router.delete('/delete/:productId', deleteProduct);


export default router;