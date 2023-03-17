import { Router } from 'express';
import rootController from '../controllers/root.js';
import logger from '../config/logger.js';

const routerRoot = new Router();

routerRoot.get('/', rootController.getRootController);

export default routerRoot;