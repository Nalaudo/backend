const { Router } = require('express')
const { getNotFoundController } = require('../controllers/notFound')
const logger = require('../config/logger');

const routerNotFound = new Router();

routerNotFound.get('/', getNotFoundController);

module.exports = routerNotFound;