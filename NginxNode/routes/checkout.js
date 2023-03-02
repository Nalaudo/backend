const { Router } = require('express')
const { getCheckoutController } = require('../controllers/checkout')
const authMiddle = require('../src/middleware/auth');
const logger = require('../src/config/logger');

const routerCheckout = new Router();

routerCheckout.get('/', authMiddle.auth, getCheckoutController);

module.exports = routerCheckout;