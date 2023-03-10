const { Router } = require('express')
const { getInorganicsController } = require('../controllers/inorganics')
const authMiddle = require('../middleware/auth');
const logger = require('../config/logger');

const routerInorganics = new Router();

routerInorganics.get('/', authMiddle.auth, getInorganicsController);

module.exports = routerInorganics;