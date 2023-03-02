const logger = require('../src/config/logger');
const Products = require('../src/models/products');

const findOrganics = async () => {
    return await Products.find({ category: 'organic' }).exec();
}

module.exports = { findOrganics }