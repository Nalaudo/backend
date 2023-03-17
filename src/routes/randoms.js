import { Router } from 'express';
import randomsController from '../controllers/randoms.js';
import logger from '../config/logger.js';

const routerRandoms = new Router();

routerRandoms.get('/', randomsController.getRandomsController);

export default routerRandoms;