// paso 1: importamos la depedencia de express
//const express = require('express') // commonJS
import express from 'express'  // ESModule
import tips from "./routes/tips.router.mjs";
import product from './routes/product.route.mjs' //importamos las rutas de la entidad
import dbconnect from './config/mongo.config.mjs'; //importamos la conexion a la base de daros

// paso 2: invocamos la ejecucuin de express
const app = express()

//invocar la configuracion de la conexion a la base de datos
dbconnect()
// Endpoint: http://localhost:3000/
app.use( product );         //implementar la ruta como middleware de express
app.use ( tips );

// paso 4: lanzamos el servidor web usando express en el puerto 3000
app.listen( 3000, () => {
    console.log('seridor lanzado exitosamente')
}  )