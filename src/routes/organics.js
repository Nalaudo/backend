import { Router } from 'express';
import organicsController from '../controllers/organics.js';
import auth from '../middleware/auth.js';
import logger from '../config/logger.js';

const routerOrganics = new Router();

routerOrganics.get('/', auth, organicsController.getOrganicsController);

export default routerOrganics;