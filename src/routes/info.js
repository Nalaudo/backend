import { Router } from 'express';
import infoController from '../controllers/info.js';
import logger from '../config/logger.js';

const routerInfo = new Router();

routerInfo.get('/', infoController.getInfoController);

export default routerInfo;