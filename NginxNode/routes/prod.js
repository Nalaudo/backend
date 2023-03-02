const { Router } = require('express')
const { getProdController, putProdController, deleteProdController, deleteAllProdsController } = require('../controllers/prod')
const logger = require('../src/config/logger');

const routerProd = new Router();

routerProd.get('/:id', getProdController);
routerProd.put('/:id', putProdController);
routerProd.delete('/:id', deleteProdController);
routerProd.delete('/', deleteAllProdsController);

module.exports = routerProd;