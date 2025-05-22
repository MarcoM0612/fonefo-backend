//controller: controlar el flujo de peticiones y respuestas del cliente
const createUser = ( req,res) => {
    const inputData = req.body

    console.log ( inputData )

    res.send (inputData)
}
//Exponiendo las funcionalidades de este archivo usando el export
export {
    createUser
}