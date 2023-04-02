import { Router } from 'express'
import checkoutController from '../controllers/checkout.js'
import auth from '../middleware/auth.js'

const routerCheckout = new Router()

routerCheckout.get('/', auth, checkoutController.getCheckoutController)

export default routerCheckout
