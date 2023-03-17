import { Router } from 'express';
import inorganicsController from '../controllers/inorganics.js';
import auth from '../middleware/auth.js';
import logger from '../config/logger.js';

const routerInorganics = new Router();

routerInorganics.get('/', auth, inorganicsController.getInorganicsController);

export default routerInorganics;