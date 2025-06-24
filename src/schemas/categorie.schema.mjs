import mongoose from "mongoose"

const categorieSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'El nombre del usuario es obligatorio']
    },

    description:{
        type: String,
        required: [true, 'La descripción es obligatorio']
    },
})

const caterorieModel = mongoose.model(
    'categories',
    categorieSchema
)

export default caterorieModel