import express from "express";
import { createUser } from "../controllers/user.controller.mjs";
import { loginUser, reNewToken } from "../controllers/auth.controller.mjs";

const router = express.Router ();

//Define las rutas para la entidad Outh
router.post('/api/register', createUser);
router.post('/api/login', loginUser);
router.get('/api/auth/re-new-token', reNewToken )

export default router;