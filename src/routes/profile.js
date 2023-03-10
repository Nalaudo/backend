const { Router } = require('express')
const { getProfileController } = require('../controllers/profile')
const authMiddle = require('../middleware/auth');
const logger = require('../config/logger');

const routerProfile = new Router();

routerProfile.get('/', authMiddle.auth, getProfileController);

module.exports = routerProfile;