const { Router } = require('express')
const { getRandomsController } = require('../controllers/randoms')
const logger = require('../config/logger');

const routerRandoms = new Router();

routerRandoms.get('/', getRandomsController);

module.exports = routerRandoms;