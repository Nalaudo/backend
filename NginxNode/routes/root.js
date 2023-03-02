const { Router } = require('express')
const { getRootController } = require('../controllers/root')
const logger = require('../src/config/logger');

const routerRoot = new Router();

routerRoot.get('/', getRootController);

module.exports = routerRoot;