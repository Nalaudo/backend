const { Router } = require('express')
const { getInfoController } = require('../controllers/info')
const logger = require('../config/logger');

const routerInfo = new Router();

routerInfo.get('/', getInfoController);

module.exports = routerInfo;