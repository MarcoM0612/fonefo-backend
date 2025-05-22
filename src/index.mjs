// paso 1: importamos la depedencia de express
//const express = require('express') // commonJS
import express from 'express';  // ESModule
import product from './routes/product.route.mjs'; //importamos las rutas de la entidad
import users from './routes/user.route.mjs';
import dbconnect from './config/mongo.config.mjs'; //importamos la conexion a la base de daros

// paso 2: invocamos la ejecucuin de express
const app = express();

// Invocar la base de datos.

app.use( express.json ()); // habilito el interprete de formato json

//invocar la configuracion de la conexion a la base de datos
dbconnect();

app.use( product );         //implementar la ruta como middleware de express
app.use( users );

// paso 4: lanzamos el servidor web usando express en http://localhost:3000
app.listen( 3000, () => {
    console.log('seridor lanzado exitosamente')
}  )