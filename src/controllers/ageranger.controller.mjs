import { validateAgeRange } from '../helpers/validate-age-range.helper.mjs';
import AgeRangeModel from '../schemas/agerange.schema.mjs';

const getAllAgeRanges = async (req, res) => {
    try {
        const ranges = await AgeRangeModel.find({});
        res.json(ranges);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: Al obtener todos los rangos de edad' });
    }
};

const createAgeRange = async (req, res) => {
    try {
        const { range: [ min, max ] } = req.body;

        const range = validateAgeRange( min, max, res ); 

        const ageRangeFound = await AgeRangeModel.findOne( range );
        if( ageRangeFound ) {
            return res.json({ msg: 'Rango ya registrado' });
        }

        const inputData = {
            label: `${ min } - ${ max } Años`, 
            min, 
            max 
        };

        const newRange = await AgeRangeModel.create( inputData );

        res.status(201).json(newRange);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se puede registrar el rango de edad' });
    }
};

const updateAgeRange = async (req, res) => {
    const { id } = req.params;

    const { range: [ min, max ] } = req.body;

    const range = validateAgeRange( min, max, res ); 

    const ageRangeFound = await AgeRangeModel.findOne( range );
    if( ageRangeFound ) {
        return res.json({ msg: 'Rango ya registrado' });
    }

    const inputData = {
        label: `${ min } - ${ max } Años`, 
        min, 
        max 
    };

    const updated = await AgeRangeModel.findByIdAndUpdate(id, inputData, { new: true });
    res.json(updated);
};

const deleteAgeRangeById = async (req, res) => {
    const rangeid = req.params.id;

try {
        const rangeFound = await AgeRangeModel.findOne({ _id: rangeid });

        if (! rangeFound) {
            return res.status(404).json({ msg: 'Este rango que deseas eleminar no existe' });
        }
        const data = await AgeRangeModel.findOneAndDelete({ _id: rangeid });

        res.status(200).json({ msg: 'Rango de edad eliminado', data:rangeFound});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No puede eliminar el rango por id' })
    }

};


export{
    createAgeRange,
    getAllAgeRanges,
    updateAgeRange,
    deleteAgeRangeById
}