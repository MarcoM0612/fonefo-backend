import mongoose from "mongoose";

// Define la estructura de datos del documento

const tipsSchema = new mongoose.Schema({
    titulo: {
        type: String,
        unique: true,
        trim: true,     
        required: false // TODO: Revisar por que al poner required en true no deja registrar
    },
    contenido: {
        type: String,
        required: false // TODO: Revisar por que al poner required en true no deja registrar
    },
    tipo: {
        type: String,
        enum: ['uso', 'educativo', 'seguridad', 'psicomotor', 'otro'],
        default: 'otro'
    },
    edadRecomendada: {
        type: String,
        default: ''
    },
    imagen: {
        type: String,
        default: ''
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    fechaPublicacion: {
        type: Date,
        default: Date.now
    },
    destacado: {
        type: Boolean,
        default: false
    },
    activo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

// Define el modelo y vincula la estructura de datos a una colección

const tipsModel = mongoose.model(
    'tips',                  // Nombre de la aplicación
    tipsSchema              //Nombre de la estructura de datos
);

// Exponemos el modelo para que sea usado por cualquier archovo de la aplicación

export default tipsModel;