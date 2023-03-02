const logger = require('../src/config/logger');
const Products = require('../src/models/products');

const findInorganics = async () => {
    return await Products.find({ category: 'inorganic' }).exec();
}

module.exports = { findInorganics }