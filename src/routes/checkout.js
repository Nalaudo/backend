const { Router } = require('express')
const { getCheckoutController } = require('../controllers/checkout')
const authMiddle = require('../middleware/auth');
const logger = require('../config/logger');

const routerCheckout = new Router();

routerCheckout.get('/', authMiddle.auth, getCheckoutController);

module.exports = routerCheckout;