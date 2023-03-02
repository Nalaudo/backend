const { prods } = require('../database/container');
const logger = require('../src/config/logger');

const getProd = async (id) => {
    return await prods.getById(id);
}
const putProd = async (id) => {
    return await prods.getById(id);
}
const deleteProd = async (id) => {
    return await prods.deleteById(id);
}
const deleteAllProds = async () => {
    return await prods.deleteAll();
}

module.exports = { getProd, putProd, deleteProd, deleteAllProds }