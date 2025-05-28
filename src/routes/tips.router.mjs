import express from "express";
import { createTips } from "../controllers/tips.controller.mjs";

const router = express.Router ();

//Define las rutas para la entidad usuario 
router.post('/api/tips', createTips);






export default router;
