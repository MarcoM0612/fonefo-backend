// routes nos sirve para definir los endpoints de una entidad
import {Router} from 'express'  //importando router de express
const router = Router();       //preparando router para definir rutas

import {createCategorie, getAllCategories, getCategorieById, removeCategorieById, updateCategorieById} from '../controllers/categorie.controller.mjs'
import { authUser } from "../middlewares/auth-user.middleware.mjs";

//definimos las rutas de acceso
router.post( '/api/categories',  authUser, createCategorie) // Crea una categoria
router.get( '/api/categories', getAllCategories) // Obtine todas las categorias
router.get( '/api/categories/:id', getCategorieById) // Obtine una categoria por ID
router.delete( '/api/categories/:id', authUser, removeCategorieById) // Elimina una categoria por ID
router.patch( '/api/categories/:id', authUser, updateCategorieById ) // Actualiza una caregoria parcial por ID

export default router;         // exportando todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion