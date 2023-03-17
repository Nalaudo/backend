import { Router } from 'express';
import notFoundController from '../controllers/notFound.js';
import logger from '../config/logger.js';

const routerNotFound = new Router();

routerNotFound.get('/', notFoundController.getNotFoundController);

export default routerNotFound;