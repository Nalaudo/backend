const { Router } = require('express')
const { getTestController } = require('../controllers/test')
const authMiddle = require('../middleware/auth');
const logger = require('../config/logger');

const routerTest = new Router();

routerTest.get('/', authMiddle.auth, getTestController);

module.exports = routerTest;