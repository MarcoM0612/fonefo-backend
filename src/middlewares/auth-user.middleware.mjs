import jwt from "jsonwebtoken";

//Middleware
const authUser = (req, res, next ) => {
    const token = req.header( 'X-Token'); //Extraemos el token de la cabezera

    //Verifica que el token no venga vacio.
    if (! token ) {
        return res.json({ msg: 'Error: Al obtener el token'});
    }


    const JWT_SECRET = '45644FDGSSFDHG74'
    
    const payload = jwt.verify( token, JWT_SECRET );
    
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