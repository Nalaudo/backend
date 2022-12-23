import { Schema, model } from 'mongoose';
import { ProductSchema } from './products.js';

const CartSchema = new Schema({
    prods: [ProductSchema],
    timestamp: { type: Number, required: true }
});

export const Carts = model('carts', CartSchema);