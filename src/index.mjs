// paso 1: importamos la depedencia de express
//const express = require('express') // commonJS
import express from 'express'  // ESModule
import user from './routes/categorie.route.mjs' //importamos las rutas de la entidad
import categorie from './routes/user.route.mjs' 
import tips from "./routes/tips.router.mjs";
import product from './routes/product.route.mjs' //importamos las rutas de la entidad
import dbconnect from './config/mongo.config.mjs'; //importamos la conexion a la base de daros

// paso 2: invocamos la ejecucuin de express
const app = express()


//invocar la configuracion de la conexion a la base de datos

dbconnect()

app.use( categorie );         //implementar la ruta como middleware de express
app.use( user ); 
app.use( express.json ())      // Habilita el interprete de objetos json

// Endpoint: http://localhost:3000/

app.use( product );         //implementar la ruta como middleware de express
app.use ( tips );            // Vincular las rutas para la entudad Tips 

// paso 4: lanzamos el servidor web usando express en el puerto 3000
app.listen( 3000, () => {
    console.log('seridor lanzado exitosamente')
}  )
