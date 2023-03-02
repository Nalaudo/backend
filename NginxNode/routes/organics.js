const { Router } = require('express')
const { getOrganicsController } = require('../controllers/organics')
const authMiddle = require('../src/middleware/auth');
const logger = require('../src/config/logger');

const routerOrganics = new Router();

routerOrganics.get('/', authMiddle.auth, getOrganicsController);

module.exports = routerOrganics;