const { Router } = require('express')
const { getLoginController, postLoginController, getFailLoginController } = require('../controllers/login')
const authMiddle = require('../middleware/auth');
const passportAuth = require('../middleware/passportAuth');
const logger = require('../config/logger');

const routerLogin = new Router();

routerLogin.get('/', getLoginController);
routerLogin.post('/', passportAuth.loginAuth(), postLoginController);
routerLogin.get('/failLogin', authMiddle.auth, getFailLoginController);

module.exports = routerLogin;