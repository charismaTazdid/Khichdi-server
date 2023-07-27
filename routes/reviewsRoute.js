import express from "express";
import { createReview, getAllReview, getSingleReview, updateReview, deleteReview } from "../controllers/reviews.js";

const router = express.Router();  // Restricted. Only admin can access

// CREATE 
router.post('/create', createReview);

// GET All reviews
router.get('/getAll', getAllReview);

// GET single review
router.get('/getOne/:reviewId', getSingleReview);

// UPDATE review
router.put('/update/:reviewId', updateReview);

// DELETE review
router.delete('/delete/:reviewId', deleteReview);


export default router;