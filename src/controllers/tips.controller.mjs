import tipsModel from "../schemas/tips.schema.mjs";


const createTips = async ( req, res ) => {
    const inputData = req.body;

    const data = await tipsModel.create( inputData );
    res.status(201).json( data );
}

// exportamos cada funcionalidad en este archivo
export {
    createTips
}