import supportController from '#controllers/support.controller.js'
import { Router } from 'express'
import auth from '#middlewares/auth.middleware.js'

const routerSupport = new Router()

routerSupport.get('/', auth, supportController.getSupportController)

export default routerSupport
