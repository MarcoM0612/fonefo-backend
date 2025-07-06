import tipsModel from "../schemas/tips.schema.mjs";


const createTips = async (req, res) => {
    const inputData = req.body;
    const userId = req.authUser._id
    inputData.autor = userId

    try {
        const tipsFound = await tipsModel.findOne({ titulo: inputData.titulo })
        if (tipsFound) {
            return res.status(404).json({ msg: 'Este tips ya existe' })
        }
        const data = await tipsModel.create(inputData);

        res.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se puede registrar el tips' });
    }



}

const getAllTips = async (req, res) => {

    try {
        const data = await tipsModel.find({}).populate(['autor']);
        res.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: no se pudo obtener la lista de tis de la base de datos' })
    }

}

const tipsGetById = async (req, res) => {
    const tipsid = req.params.id;

    try {
        const data = await tipsModel.findById(tipsid).populate(['autor']);
        // data == null --> equivale a --> ! data
        if (!data) {
            return res.json({ msg: 'Tips no encontrado por id' })
        }
        res.json(data)
    }
    catch (error) {
        console.error(error);
        res.json({ msg: 'Error: no se pudo obtener el tips por id ' })
    }

}

const updateTipsById = async (req, res) => {
    const tipsid = req.params.id;
    const inputData = req.body;

    try {
        const tipsFound = await tipsModel.findOne({ _id: tipsid })
        if (!tipsFound) {
            return res.status(404).json({ msg: 'Este tips no se puede actualizar' })
        }
        const data = await tipsModel.findByIdAndUpdate(tipsid, inputData, { new: true });
        res.json(data);

    } catch (error) {
        console.error(error);
        res.json({ msg: 'Error: No pudo actualizar el tips en la base de datos' });
    }

}

const deleteTipsById = async (req, res) => {
    const tipsid = req.params.id;

    try {
        //paso 1: Verificar si el usuario existe por id 
        const tipsFound = await tipsModel.findOne({ _id: tipsid });

        //Tipsfound == nul --> equivale a --> !tipsfound
        if (! tipsFound) {
            return res.status(404).json({ msg: 'Este tips que deseas eleminar no existe' });
        }
        // paso 2: Elimina el usuario por id
        const data = await tipsModel.findOneAndDelete({ _id: tipsid });

        res.status(200).json(tipsFound);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No puede eliminar el tips por id' })
    }

    // res.json( tipsid )

}

// exportamos cada funcionalidad en este archivo
export {
    createTips,
    getAllTips,
    tipsGetById,
    updateTipsById,
    deleteTipsById
}