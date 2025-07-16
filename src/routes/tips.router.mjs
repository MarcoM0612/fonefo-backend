import express from "express";
import { createTips, deleteTipsById, getAllTips, tipsGetById, updateTipsById } from "../controllers/tips.controller.mjs";
import { authUser } from "../middlewares/auth-user.middleware.mjs";

const router = express.Router ();

//Define las rutas para la entidad usuario 
router.post('/api/tips', authUser, createTips);
router.get( '/api/tips', authUser, getAllTips);

//Parametrizar las rutas 

router.get( '/api/tips/:id',authUser,  tipsGetById );
router.patch( '/api/tips/:id',authUser, updateTipsById );
router.delete( '/api/tips/:id',authUser, deleteTipsById)

export default router;
