import { Router } from 'express';
import profileController from '../controllers/profile.js';
import auth from '../middleware/auth.js';
import logger from '../config/logger.js';

const routerProfile = new Router();

routerProfile.get('/', auth, profileController.getProfileController);

export default routerProfile;