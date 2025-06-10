// paso 1: importamos la depedencia de express
//const express = require('express') // commonJS
import express from 'express'  // ESModule
import user from './routes/user.route.mjs' //importamos las rutas de la entidad
import categorie from './routes/categorie.route.mjs' 
import tips from "./routes/tips.router.mjs";
import product from './routes/product.route.mjs' //importamos las rutas de la entidad
import auth from "./routes/auth.router.mjs";
import dbconnect from './config/mongo.config.mjs'; //importamos la conexion a la base de daros

// paso 2: invocamos la ejecucuin de express
const app = express()

const PORT = process.env.PORT ?? 3001

// Invocar la base de datos.

app.use( express.json ());       // habilito el interprete de formato json

//invocar la configuracion de la conexion a la base de datos

dbconnect()

// Endpoint: http://localhost:3000
app.use( user );               //Vincula las rutas para la entidad Users
app.use( auth );               // Vincula las rutas para la entidad Auth
app.use( categorie );          //implementar la ruta como middleware de express
app.use( product );            //implementar la ruta como middleware de express
app.use ( tips );              // Vincular las rutas para la entudad Tips 

// Endpoint: http://localhost:3000/



//  lanzamos el servidor web usando express en el puerto 3000

app.listen( PORT, () => {
    console.log( `seridor lanzado exitosamente en http://localhost:${ PORT } ` );
} );
