const { Router } = require('express')
const { getRandomsController } = require('../controllers/randoms')
const logger = require('../src/config/logger');

const routerRandoms = new Router();

routerRandoms.get('/', getRandomsController);

module.exports = routerRandoms;