const logger = require('../config/logger');
const Products = require('../database/models/products');

const findOrganics = async () => {
    return await Products.find({ category: 'organic' }).exec();
}

module.exports = { findOrganics }