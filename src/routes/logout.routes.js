import logoutController from '#controllers/logout.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerLogout = new Router()

routerLogout.get('/', auth, logoutController.getLogoutController)

export default routerLogout
