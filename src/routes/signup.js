import { Router } from 'express'
import signupController from '../controllers/signup.js'
import passportAuth from '../middleware/passportAuth.js'
import upload from '../utils/multer.js'

const routerSignup = new Router()

routerSignup.get('/', signupController.getSignupController)
routerSignup.get('/failSignup', signupController.getFailSignupController)
routerSignup.post('/', upload, passportAuth.signupAuth(), signupController.postSignupController)

export default routerSignup
