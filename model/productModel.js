import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    dailySales: {type: Number, required: false, default: 0},
    WeeklySales: {type: Number, required: false, default: 0}
},
{
    timestamps: true 
});

export default mongoose.model('Product', ProductSchema);