const { Router } = require('express')
const { getLoginController, postLoginController, getFailLoginController } = require('../controllers/login')
const authMiddle = require('../src/middleware/auth');
const passportAuth = require('../src/middleware/passportAuth');
const logger = require('../src/config/logger');

const routerLogin = new Router();

routerLogin.get('/', getLoginController);
routerLogin.post('/', passportAuth.loginAuth(), postLoginController);
routerLogin.get('/failLogin', authMiddle.auth, getFailLoginController);

module.exports = routerLogin;