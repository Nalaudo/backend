import signupController from '#controllers/signup.controller.js'
import passportAuth from '#middlewares/passportAuth.middleware.js'
import upload from '#utils/multer.js'
import { Router } from 'express'

const routerSignup = new Router()

routerSignup.get('/', signupController.getSignupController)
routerSignup.get('/failSignup', signupController.getFailSignupController)
routerSignup.post('/', upload, passportAuth.signupAuth(), signupController.postSignupController)

export default routerSignup
