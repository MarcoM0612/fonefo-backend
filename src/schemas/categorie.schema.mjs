import mongoose from "mongoose"

const categorieSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'El nombre de la categoria es obligatorio']
    },
    description:{
        type: String,
        required: [true, 'La descripción de la categoria es obligatorio']
    },
    autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
})

const caterorieModel = mongoose.model(
    'categories',
    categorieSchema
)

export default caterorieModel