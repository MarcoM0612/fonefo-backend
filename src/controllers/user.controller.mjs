import userModel from "../schemas/user.schema.mjs";

//controller: controlar el flujo de peticiones y respuestas del cliente
const createUser = async ( req,res) => {
    const inputData = req.body;

    // try: Controla las exepciones de la consolta a la base de datos 
    try {
        const registrerUser = await userModel.create( inputData );
        console.log ( registrerUser );   //Imprime en la consola
        res.status(201).json( registrerUser ); // Enviando la respuesta la cliente 
    }  
    catch (error){ // catch: Captura el error producido por la excepcion
        console.log ( error );
        res.status(500).json ( { msg: 'Error: no se pudo registrar el usuario' });
    }

    
}

const getAlluser = async ( req,res ) => {

    try {
        const data = await userModel.find({});
        res.json( data );
    } 
    catch (error) {
        console.error( error );
        res.json({ msg: 'Error: no se pudo obtener el listado de usuarios'})
    }

}

const getUserById = async ( req,res ) => {
    const userId = req.params.id;  // El nombre final dependera del nombre del parametro de la rutra

    try {
        const data =await userModel.findById( userId ); 
        //Verifica si el producto no existe y lanza el respoectivo mensaje al cliente
        if ( ! data ) {
            return res.json({ msg: 'No se encuentra el usuario registrado'});
        }
        res.json ( data );
    } 
    catch (error) {
        console.error( error );
        res.json({ msg: 'Error: no se pudo encontrar el registro'})
    }

}

const removeUserById = async ( req,res ) => {
    const userId = req.params.id;

    try {
        const data =  await userModel.findByIdAndDelete ( userId )
        //Verifica si el producto no existe y lanza el respoectivo mensaje al cliente
        if ( ! data ) {
            return res.json({ msg: 'El usuario no existe'});
        }
        res.json( data );
    } 
    catch (error) {
        console.error( error );
        res.json({ msg: 'Error: no se pudo encontrar el usuario'})
    }

}

const updateUserById = async (req,res ) => {
    const userId = req.params.id;      // Obtenemos el Id de la parametrización de la ruta 
    const inputData = req.body;        // Obtenemos el Body de la petición

    try {
        const data = await userModel.findByIdAndUpdate( userId, inputData, { new: true} );
    res.json ( data );
    } 
    catch (error) {
        console.error( error );
        res.json({ msg: 'Error: No se pudo actualizar el usuario'})
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