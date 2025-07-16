import bcrypt from "bcrypt";
import userModel from "../schemas/user.schema.mjs";
import { generateToken } from "../helpers/jwt.helper.mjs";

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
        _id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    }; 

    const token = generateToken( payload );

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

    const token = generateToken(payload)

    res.json({ token });
}

export {
    loginUser,
    reNewToken
}