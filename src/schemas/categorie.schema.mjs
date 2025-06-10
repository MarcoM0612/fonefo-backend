import mongoose from "mongoose"

const categorieSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'El nombre del usuario es obligatorio']
    },
    age:{
        type: Number,
        trim: true
    },
    description:{
        type: String,
        required: [true, 'La descripción es obligatorio']
    },
    price:{
        type: Number,
        required: [true, 'El precio  es obligatorio']
    }
})

const caterorieModel = mongoose.model(
    'categories',
    categorieSchema
)

export default caterorieModel