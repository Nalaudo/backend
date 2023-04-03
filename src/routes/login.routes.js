import loginController from '#controllers/login.controller.js'
import auth from '#middlewares/auth.middleware.js'
import passportAuth from '#middlewares/passportAuth.middleware.js'
import { Router } from 'express'

const routerLogin = new Router()

routerLogin.get('/', loginController.getLoginController)
routerLogin.post('/', passportAuth.loginAuth(), loginController.postLoginController)
routerLogin.get('/failLogin', auth, loginController.getFailLoginController)

export default routerLogin
