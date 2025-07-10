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
    urlImage: {
        type: String
    },
    state: {
        type: Boolean,
        default: true
    },
    ageRanges: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'AgeRange' 
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    //TODO: evaluar la competencia del campo tips en este schema
    tips: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "tips"
    },
    autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
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
