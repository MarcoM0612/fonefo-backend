// routes nos sirve para definir los endpoints de una entidad
import {Router} from 'express'  //importando router de express
const router = Router();       //preparando router para definir rutas

import {createCategorie} from '../controllers/categorie.controller.mjs'


//definimos las rutas de acceso
router.get( '/api/categories', (req,res) => {
    res.send( 'obtiene todos las categorias' )
} )

router.post( '/api/categories', createCategorie)

router.patch( '/api/categories', ( req,res) => {
    res.send ('Actualización parcial de una categoria')
})

router.put( '/api/categories', ( req,res) => {
    res.send ('Actualización total de una categoria')
})

router.put( '/api/categories', ( req,res) => {
    res.send ('Actualización total de una categoria')
})

router.delete( '/api/categories', ( req,res) => {
    res.send ('Elimina una categoria')
})

export default router;         // exportando todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion