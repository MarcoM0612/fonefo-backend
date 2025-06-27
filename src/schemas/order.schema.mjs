import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
        },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        priceAtPurchase: Number
    }],
    total: Number,
    status: { 
        type: String, 
        enum: ['pending', 'paid', 'shipped', 'cancelled'], 
        default: 'pending' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now }
},{
    timestamps:true,
    versionKey:false
});

const orderModel = mongoose.model(
    'order',
    orderSchema
)

export default orderModel