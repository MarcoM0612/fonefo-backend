import caterorieModel from "../schemas/categorie.schema.mjs"

const createCategorie = async ( req,res) => {
    const inputData = req.body


    try {
        const dataCategorie = await caterorieModel.create(inputData)
        console.log(dataCategorie)
        res.json(dataCategorie)
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL INGRENSAR DATOS, VERIFIQUE NUEVAMENETE ***"})
    }
}

export{
    createCategorie
}