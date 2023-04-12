import supportController from '#controllers/support.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerSupport = new Router()

routerSupport.get('/', auth, supportController.getSupportController)

export default routerSupport
