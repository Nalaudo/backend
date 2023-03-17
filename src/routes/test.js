import { Router } from 'express';
import testController from '../controllers/test.js';
import auth from '../middleware/auth.js';
import logger from '../config/logger.js';

const routerTest = new Router();

routerTest.get('/', auth, testController.getTestController);

export default routerTest;