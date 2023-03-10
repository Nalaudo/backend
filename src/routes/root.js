const { Router } = require('express')
const { getRootController } = require('../controllers/root')
const logger = require('../config/logger');

const routerRoot = new Router();

routerRoot.get('/', getRootController);

module.exports = routerRoot;