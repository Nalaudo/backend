const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true }
});

const Products = mongoose.model('products', ProductSchema);

module.exports = Products