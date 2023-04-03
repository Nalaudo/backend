import checkoutController from '#controllers/checkout.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerCheckout = new Router()

routerCheckout.get('/', auth, checkoutController.getCheckoutController)

export default routerCheckout
