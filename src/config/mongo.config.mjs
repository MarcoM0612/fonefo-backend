import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/db-fonefo-kids'    // ?? Operador de coalesencia 

//definimos una funcion asincronica para definir la configuracion del ODM mongoose para usar mongoDB
async function dbconnect () {

    try {
        await mongoose.connect ( DB_URI, {} );

        console.log( `Base de datos conectada exitosamente a ${DB_URI}` );
    }
    catch (error) {
        console.error(error)
        console.error('Error al conectar a la base de datos')
    }
}

export default dbconnect;