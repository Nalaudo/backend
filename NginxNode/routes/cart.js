const { Router } = require('express')
const { getCartControllerDelete, getCartControllerPut, getCartController } = require('../controllers/cart')
const authMiddle = require('../src/middleware/auth');
const logger = require('../src/config/logger');

const routerCart = new Router();

routerCart.get('/del', authMiddle.auth, getCartControllerDelete);
routerCart.get('/:id', authMiddle.auth, getCartControllerPut);
routerCart.get('/', authMiddle.auth, getCartController);

module.exports = routerCart;