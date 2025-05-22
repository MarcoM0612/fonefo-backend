// routes nos sirve para definir los endpoints de una entidad
import {Router} from 'express'  //importando router de express
import { createUser } from '../../controllers/user.controller.mjs';
const router = Router();       //preparando router para definir rutas

//definimos las rutas de acceso
router.get( '/api/usuarios', (req,res) => {
    res.send( 'obtiene todos los usuarios' )
} )
//Define las rutas de acceso y vincila a su respectivo vinculador
router.post( '/api/usuarios', createUser)

router.patch( '/api/usuarios', ( req,res) => {
    res.send ('Actualización parcial de un usuario')
})

router.put( '/api/usuarios', ( req,res) => {
    res.send ('Actualización total de un usuario')
})

router.put( '/api/usuarios', ( req,res) => {
    res.send ('Actualización total de un usuario')
})

router.delete( '/api/usuarios', ( req,res) => {
    res.send ('Elimina un usuario')
})

export default router;         // exportando todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion