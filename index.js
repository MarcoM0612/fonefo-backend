// paso 1: importamos la depedencia de express
//const express = require('express') // commonJS
import express from 'express'  // ESModule

// paso 2: invocamos la ejecucuin de express
const app = express()

// paso 3: lanzamos el servidor web usando express en el puerto 3000
app.listen( 3000, () => {
    console.log('seridor lanzado exitosamente')
}  )