import { Router } from 'express';
import logoutController from '../controllers/logout.js';
import auth from '../middleware/auth.js';
import logger from '../config/logger.js';

const routerLogout = new Router();

routerLogout.get('/', auth, logoutController.getLogoutController);

export default routerLogout;