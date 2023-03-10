const ContainerFactory = require('../database/DAOs/containerFactory');
const prods = new ContainerFactory('products')
const logger = require('../config/logger');

class Prods {
    constructor() {
        this.prodsDao = 'xd'
    }
}

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