import express from "express"; // importa la dependencia 
import { createUser, getAlluser, getUserById } from "../controllers/user.controller.mjs";

const router = express.Router (); // Invoca el router de express

//Definir ñas rutas para la entidad User 
router.post( '/api/user', createUser);
router.get('/api/user', getAlluser  );
router.get('/api/user/:id', getUserById )             //:id (Parametrizar la ruta, se crea una especie de variable para que cualquier valor que pasemos despues de create.user lo tomo como un valor que espera la ruta)



// Exponer el router de este archivo para ser usado por otros en la aplicación
export default router;