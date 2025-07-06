import caterorieModel from "../schemas/categorie.schema.mjs"

const createCategorie = async (req,res) => {
    const inputData = req.body 
    const userId = req.authUser._id
    inputData.autor = userId

    try {
        const dataCategorie = await caterorieModel.create(inputData)
        console.log(dataCategorie)
        res.json(dataCategorie)
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL INGRENSAR DATOS, VERIFIQUE NUEVAMENETE... ***"})
    }
}

const getAllCategories = async (req,res) => {
    try {
        const dataCategorie = await caterorieModel.find({}).populate(['autor'])
        res.json(dataCategorie)
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL OBTENER LOS DATOS, INTENTE NUEVAMENETE... ***"})
    }
}

const getCategorieById = async (req,res) => {
    const idCategorie = req.params.id 

    try {
        const dataCategorie = await caterorieModel.findById(idCategorie).populate(['autor'])
        if (!dataCategorie){
            return  res.json({msg:"*** ERROR, LA CATEGORIA NO EXISTE, VERIFIQUE EL ID... ***"})
        }
        res.json(dataCategorie)
        
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL OBTENER EL DATO, INTENTE NUEVAMENETE... ***"})
    }
}

const removeCategorieById = async (req,res) => {
    const idCategorie = req.params.id 

    try {
        const dataCategorie = await caterorieModel.findByIdAndDelete(idCategorie)
        if (!dataCategorie){
            return  res.json({msg:"*** ERROR, LA CATEGORIA NO EXISTE, VERIFIQUE EL ID... ***"})
        }
        res.json(dataCategorie)
        
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL ELIMINAR EL DATO, INTENTE NUEVAMENETE... ***"})
    }
}

const updateCategorieById = async (req,res) => {
    const idCategorie = req.params.id 
    const inputData = req.body

    try {
        const dataCategorie = await caterorieModel.findByIdAndUpdate(idCategorie, inputData, {new: true})
        if (!dataCategorie){
            return  res.json({msg:"*** ERROR, LA CATEGORIA NO EXISTE, VERIFIQUE EL ID... ***"})
        }
        res.json(dataCategorie)
        
    } catch (error) {
        console.error(error)
        res.json({msg:"*** ERROR AL ACTUALIZAR LOS DATOS, INTENTE NUEVAMENETE... ***"})
    }
}

export{
    createCategorie,
    getAllCategories,
    getCategorieById,
    removeCategorieById,
    updateCategorieById
}