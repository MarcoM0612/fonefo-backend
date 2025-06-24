//definir estructura de datos de mi documento
import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    name: {
        type: String,
        trim: true,
        require: [true,"el nombre del producto es obligatorio"]
    },
    description: {
        type: String,
        trim: true,
        require: [true,"la descripcion del producto es obligatorio"]
    },
    price:{
        type: Number,
        min: 0,
        default:0
    },
    stock: {
        type: Number,
        min: 1,
        default: 1
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    urlImage: {
        type: String
    },
    state: {
        type: String,
        default: true
    },
    tips: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tips"
    },
    isActive: { 
        type: Boolean,
        default: true 
    },
    

},{
    timestamps:true,
    versionKey:false
})

const productmodel = mongoose.model(
    'products',
    productSchema
)
export default productmodel
