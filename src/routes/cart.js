import { Router } from 'express'
import cartController from '../controllers/cart.js'
import auth from '../middleware/auth.js'

const routerCart = new Router()

routerCart.get('/del', auth, cartController.getCartControllerDelete)
routerCart.get('/:id', auth, cartController.getCartControllerPut)
routerCart.get('/', auth, cartController.getCartController)

export default routerCart
