const logger = require('../config/logger');
const Products = require('../database/models/products');

const findInorganics = async () => {
    return await Products.find({ category: 'inorganic' }).exec();
}

module.exports = { findInorganics }