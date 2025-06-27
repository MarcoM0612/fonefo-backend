import express from 'express';
import { getUserOrders, getOrderById, createOrder } from '../controllers/order.controller.mjs';

const router = express.Router();

router.get('/api/order', getUserOrders);
router.get('/api/order/:id', getOrderById);
router.post('/api/order', createOrder);

export default router;