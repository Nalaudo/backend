import rootController from '#controllers/root.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerRoot = new Router()

routerRoot.get('/', auth, rootController.getRootController)

export default routerRoot
