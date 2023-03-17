import { Router } from 'express';
import loginController from '../controllers/login.js';
import auth from '../middleware/auth.js';
import passportAuth from '../middleware/passportAuth.js';
import logger from '../config/logger.js';

const routerLogin = new Router();

routerLogin.get('/', loginController.getLoginController);
routerLogin.post('/', passportAuth.loginAuth(), loginController.postLoginController);
routerLogin.get('/failLogin', auth, loginController.getFailLoginController);

export default routerLogin;