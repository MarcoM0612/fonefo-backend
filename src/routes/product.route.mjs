// routes nos sirve para definir los endpoints de una entidad
import {Router} from 'express'  //importando router de express
const router = Router();       //preparando router para definir rutas

//definimos las rutas de acceso
router.get( '/api/products', (req,res) => {
    res.send( 'obtiene todos los productos' )
} )

router.post( '/api/products', ( req,res) => {
    res.send ('crear un producto')
})

router.patch( '/api/products', ( req,res) => {
    res.send ('Actualización parcial de un producto')
})

router.put( '/api/products', ( req,res) => {
    res.send ('Actualización total de un producto')
})

router.delete( '/api/products', ( req,res) => {
    res.send ('Elimina un producto')
})

export default router;         // exportando todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion