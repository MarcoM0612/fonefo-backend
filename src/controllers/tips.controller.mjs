import tipsModel from "../schemas/tips.schema.mjs";


const createTips = async (req, res) => {
    const inputData = req.body;

    try {
            const tipsFound = await tipsModel.findOne({ titulo: inputData.titulo })
            if ( tipsFound ) {
                return res.status( 404).json( { msg: 'Este tips ya existe'})
            }
            const data = await tipsModel.create( inputData );

            res.status(201).json( data );
    } 
    catch (error) {
        console.error( error );
        res.status(500).json ({ msg: 'Error: No se puede registrar el tips'});
    }



}

// exportamos cada funcionalidad en este archivo
export {
    createTips
}