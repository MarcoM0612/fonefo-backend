import productmodel from "../schemas/product.schemas.mjs"

//
const createProduct = async (req,res) => {
    const InputData = req.body

    try {
        const registeredProduct = await productmodel.create(inputData)

        console.log(registeredProduct)
        res.json(registeredProduct)

    }
    catch{
        console.log(error)
        res.json({ msg: "Error: No se pudo registrar el producto"})
    }

    const DataProduct = await productmodel.create(InputData)
    console.log(DataProduct)
    res.send(DataProduct)
}

export {
    createProduct
}