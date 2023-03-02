const { Router } = require('express')
const { getInfoController } = require('../controllers/info')
const logger = require('../src/config/logger');

const routerInfo = new Router();

routerInfo.get('/', getInfoController);

module.exports = routerInfo;