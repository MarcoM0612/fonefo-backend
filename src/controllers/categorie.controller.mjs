import caterorieModel from "../schemas/categorie.schema.mjs"

const createCategorie = async ( req,res) => {
    const inputData = req.body


    try {
        const dataCategorie = await caterorieModel.create(inputData)
        console.log(dataCategorie)
        res.send(dataCategorie)
    } catch (error) {
        console.log("*** ERROR AL INGRENSAR DATOS, VERIFIQUE NUEVAMENETE ***")
    }
}

export{
    createCategorie
}