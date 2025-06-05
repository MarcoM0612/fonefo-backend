import jwt from "jsonwebtoken";

const JWT_SECRET = '45644FDGSSFDHG74'

const generateToken = (payload) => {

    const token = jwt.sign(
            payload,             //Carga util
            JWT_SECRET,          //Palabra semilla o secreta 
            { expiresIn: '1h' }  //Opciones de configuración del token
        );

        return token;

}
const verifyToken = (token) => {
    const payload = jwt.verify( 
        token,                     //Token Valido
        JWT_SECRET                //Palabra  semilla o secreta 
    );

    return payload;
}

export {
    generateToken,
    verifyToken
}