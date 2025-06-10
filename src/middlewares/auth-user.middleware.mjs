
import { verifyToken } from "../helpers/jwt.helper.mjs";

//Middleware
const authUser = (req, res, next ) => {
    const token = req.header( 'X-Token'); //Extraemos el token de la cabezera

    //Verifica que el token no venga vacio.
    if (! token ) {
        return res.json({ msg: 'Error: Al obtener el token'});
    }
    
    const payload = verifyToken ( token );
    
    //Eliminamos propiedades adicionales
    delete payload.iat;
    delete payload.exp;

    req.authUser = payload;

    console.log({req});

    next();
}

export {
    authUser
}