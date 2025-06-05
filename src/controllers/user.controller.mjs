import bcrypt from "bcrypt";
import userModel from "../schemas/user.schema.mjs";

//controller: controlar el flujo de peticiones y respuestas del cliente
const createUser = async (req, res) => {
    const inputData = req.body;

    try {
        // Paso 1: Verificar si el usuario existe
        const userFound = await userModel.findOne({
            username: inputData.username,
            email: inputData.email
        });

        if (userFound) {
            return res.status(404).json({ msg: 'No pudo registrarse por que, el usuario ya existe.' });
        }

        // Paso 2: Encriptar la contrasena
        const salt = bcrypt.genSaltSync();
        console.log('salt: ', salt);

        const hashPassword = bcrypt.hashSync(
            inputData.password,         // PASSWORD_ORIGINAL
            salt                        //Cadena aleatoria
        );
        console.log('hashPassword: ', hashPassword); //hashPassword

        inputData.password = hashPassword;  //Remplazar el password original por el password enciptado

        // Paso 3: Registrar el usuario
        const data = await userModel.create(inputData);

        // Paso 4: Responder al cliente que se registro existosamente
        res.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo crear el usuario' });
    }

}

const getAlluser = async (req, res) => {

    try {
        const data = await userModel.find({});
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'Error: no se pudo obtener el listado de usuarios' })
    }

}

const getUserById = async (req, res) => {
    const userId = req.params.id;  // El nombre final dependera del nombre del parametro de la rutra

    try {
        const data = await userModel.findById(userId);
        //Verifica si el producto no existe y lanza el respoectivo mensaje al cliente
        if (!data) {
            return res.json({ msg: 'No se encuentra el usuario registrado' });
        }
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'Error: no se pudo encontrar el registro' })
    }

}

const removeUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const data = await userModel.findByIdAndDelete(userId)
        //Verifica si el producto no existe y lanza el respoectivo mensaje al cliente
        if (!data) {
            return res.json({ msg: 'El usuario no existe' });
        }
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'Error: no se pudo encontrar el usuario' })
    }

}

const updateUserById = async (req, res) => {
    const userId = req.params.id;      // Obtenemos el Id de la parametrización de la ruta 
    const inputData = req.body;        // Obtenemos el Body de la petición

    try {
        const data = await userModel.findByIdAndUpdate(userId, inputData, { new: true });
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'Error: No se pudo actualizar el usuario' })
    }

}



//Exponiendo las funcionalidades de este archivo usando el export
export {
    createUser,
    getAlluser,
    getUserById,
    removeUserById,
    updateUserById
}