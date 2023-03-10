const { Router } = require('express')
const { getLogoutController } = require('../controllers/logout')
const authMiddle = require('../middleware/auth');
const logger = require('../config/logger');

const routerLogout = new Router();

routerLogout.get('/', authMiddle.auth, getLogoutController);

module.exports = routerLogout;