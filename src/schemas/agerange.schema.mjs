import mongoose from "mongoose"

const ageRangeSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    }, // Ej: "0-3 años", "4-6 años"
    min: {
        type: Number,
        required: true
    },
    max: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});


const AgeRangeModel = mongoose.model(
    'AgeRange',
    ageRangeSchema
)

export default AgeRangeModel