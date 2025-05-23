import express from "express"; // importa la dependencia 
import { createUser } from "../controllers/user.controller.mjs";

const router = express.Router (); // Invoca el router de express

//Definir ñas rutas para la entidad User 
router.post( '/api/user', createUser)


// Exponer el router de este archivo para ser usado por otros en la aplicación
export default router;