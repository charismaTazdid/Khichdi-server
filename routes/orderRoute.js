import express from "express";
import { createOrder, deleteOrder, getAllOrder, getOrderByDate, getOrderByDaterange, updateOrder } from "../controllers/orders.js";

const router = express.Router();

// CREATE
router.post('/create', createOrder);
// READ
router.get('/getAll', getAllOrder);
router.get('/getByDate', getOrderByDate);
router.get('/getByDateRange', getOrderByDaterange);
// UPDATE
router.put('/updateOrder/:orderId', updateOrder);
// DELETE
router.delete('/deleteOrder/:orderId', deleteOrder);

export default router;