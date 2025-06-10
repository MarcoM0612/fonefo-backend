import productmodel from "../schemas/product.schemas.mjs"

//
const createProduct = async (req,res) => {
    const InputData = req.body

    try {
        const registeredProduct = await productmodel.create(InputData)

        console.log(registeredProduct)
        res.status(201).json(registeredProduct)

    }
    catch ( error ) {
        console.log(error)
        res.status(500).json({ msg: "Error: No se pudo registrar el producto"})
    }

    const DataProduct = await productmodel.create(InputData)
    console.log(DataProduct)
    res.send(DataProduct)
}

const getALLproducts = async (req,res) => {

    try {
        const data = await productmodel .find({}).populate(['category'])
    res.json( data )
    }
    catch (error){
        console.error(error)
        res.json({msg:'error:No se pudo obtener el listado de productos'})
    }
}

const getProductById = async (req,res) => {
    const productId = req.params.id
    
    try{
        const data = await productmodel.findById(productId).populate(['category'])

        if(!data ){
            return res.json({msg:'El producto no se encuentra registrado'})
        }
        res.json(data)

    }
    catch(error){
        console.error(error);
        res.json({msg:'Error: No se pudo encontrar el producto'})
    }

}

const removeProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const data = await productmodel.findByIdAndDelete(productId);

        if (!data) {
            return res.status(404).json({ msg: 'El producto no se encuentra registrado' });
        }

        res.json({ msg: 'Producto eliminado correctamente', producto: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo eliminar el producto' });
    }
}

const updateProductById = async(req,res) => {
    const productId = req.params.id
    const inputData = req.body

    try {
        const data = await productmodel.findByIdAndUpdate(productId, inputData, {new:true})

        res,json(data)
    }

    catch (error) {
        console.error(error)
        res.json({msg: 'Error: No se pudo actualizar el producto'})
    }
}

//exponer las funcionalidades para ser usadas por otros archivos
export {
    createProduct,
    getALLproducts,
    getProductById,
    removeProductById,
    updateProductById
}