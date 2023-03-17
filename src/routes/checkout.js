import { Router } from 'express';
import checkoutController from '../controllers/checkout.js';
import auth from '../middleware/auth.js';
import logger from '../config/logger.js';

const routerCheckout = new Router();

routerCheckout.get('/', auth, checkoutController.getCheckoutController);

export default routerCheckout;