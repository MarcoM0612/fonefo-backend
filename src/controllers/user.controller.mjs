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


//Exponiendo las funcionalidades de este archivo usando el export
export {
    createUser
}