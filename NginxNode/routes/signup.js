const { Router } = require('express')
const { getSignupController, getFailSignupController, postSignupController } = require('../controllers/signup')
const passportAuth = require('../src/middleware/passportAuth');
const upload = require('../src/utils/multer');
const logger = require('../src/config/logger');

const routerSignup = new Router();

routerSignup.get('/', getSignupController);
routerSignup.get('/failSignup', getFailSignupController);
routerSignup.post('/', upload, passportAuth.signupAuth(), postSignupController);

module.exports = routerSignup;