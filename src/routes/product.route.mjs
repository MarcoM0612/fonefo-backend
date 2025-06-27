// routes nos sirve para definir los endpoints de una entidad
import express from 'express'  //importando router de express
import { createProduct, getALLproducts, getProductById, removeProductById, updateProductById } from '../controllers/product.controller.mjs'
import { authUser } from "../middlewares/auth-user.middleware.mjs";

const router = express.Router()       //preparando router para definir rutas

//definimos las rutas de acceso y las vincula a su respectivo controlador


router.post( '/api/product', createProduct)
router.get( '/api/product', getALLproducts)
router.get( '/api/product/:id',getProductById)     //parametrizar la ruta
router.delete('/api/product/:id',authUser, removeProductById)
router.patch('/api/product/:id',authUser, updateProductById)

export default router;         // exportando todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion


// router.patch( '/api/productos', ( req,res) => {
//     res.send ('Actualización parcial de un producto')
// })

// router.put( '/api/productos', ( req,res) => {
//     res.send ('Actualización total de un producto')
// })

// router.delete( '/api/productos', ( req,res) => {
//     res.send ('Elimina un producto')
// })

