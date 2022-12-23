import { Schema, model } from 'mongoose';

export const ProductSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true, max: 100 },
    code: { type: String, required: true, max: 7 },
    stock: { type: Number, required: true },
    timestamp: { type: Number, required: true },
});

export const Products = model('products', ProductSchema);