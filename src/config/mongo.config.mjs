import mongoose from 'mongoose';

//definimos una funcion asincronica para definir la configuracion del ODM mongoose para usar mongoDB
async function dbconnect () {

    try {
        await mongoose.connect ('mongodb://localhost:27017/db-fonefo',{});

        console.log('Base de datos conectada exitosamente');
    }
    catch (error) {
        console.error(error)
        console.error('Error al conectar a la base de datos')
    }
}

export default dbconnect;