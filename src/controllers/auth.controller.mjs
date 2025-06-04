import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../schemas/user.schema.mjs";

// Authentication 
const loginUser = async(req, res ) => {
    // Pasi 1: Obtener los datos del body
    const inputData = req.body;
    //Paso 2: Verificar si el usuario existe (por favor registrarse )
    const userFound = await userModel.findOne({ email: inputData.email});
    if(!userFound){
        return res.json ({ msg: 'El usuario no existe, por favor registrese'});
    }
    //Paso 3: Verificar la contraseña (si cohinside)
    const isAuthenticated = bcrypt.compareSync(
        inputData.password,         //PASSWOR-ORIGINAL
        userFound.password          //hash password
    );
    if(! isAuthenticated ){
        return res.json({ msg: 'Contraseña invalida'});
    }
    //Paso 4: Generar credencial digital (Token)
    const payload = {
        name: userFound.name,
        email: userFound.name,
        role: userFound.role
    }; 

    const JWT_SECRET = '45644FDGSSFDHG74'

    const token = jwt.sign(
        payload,             //Carga util
        JWT_SECRET,          //Palabra semilla o secreta 
        { expiresIn: '1h' }  //Opciones de configuración del token
    );

    //paso 5: Eliminar algunas propiedades que traen datos sencibles 
    const objsUser = userFound.toObject ();     //conertir un objeto Json en Objeto Javascript
    delete objsUser.password;
    delete objsUser.createdAt;
    delete objsUser.updatedAt;

    //Paso 6: respuesta al cliente 
    res.json({
        token, user:objsUser
    });

}

const reNewToken = (req, res) => {
    const payload = req.authUser;

    const JWT_SECRET = '45644FDGSSFDHG74'

    const token = jwt.sign(
        payload,             //Carga util
        JWT_SECRET,          //Palabra semilla o secreta 
        { expiresIn: '1h' }  //Opciones de configuración del token
    );

    res.json({ token });
}

export {
    loginUser,
    reNewToken
}