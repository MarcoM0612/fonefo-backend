import express from "express";
import { createTips, deleteTipsById, getAllTips, tipsGetById, updateTipsById } from "../controllers/tips.controller.mjs";

const router = express.Router ();

//Define las rutas para la entidad usuario 
router.post('/api/tips', createTips);
router.get( '/api/tips', getAllTips);


//Parametrizar las rutas 
router.get( '/api/tips/:id', tipsGetById );
router.patch( '/api/tips/:id', updateTipsById );
router.delete( '/api/tips/:id', deleteTipsById)


export default router;
