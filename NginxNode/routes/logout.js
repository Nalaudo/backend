const { Router } = require('express')
const { getLogoutController } = require('../controllers/logout')
const authMiddle = require('../src/middleware/auth');
const logger = require('../src/config/logger');

const routerLogout = new Router();

routerLogout.get('/', authMiddle.auth, getLogoutController);

module.exports = routerLogout;