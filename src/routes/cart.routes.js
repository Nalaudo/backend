import cartController from '#controllers/cart.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerCart = new Router()

routerCart.get('/del', auth, cartController.getCartControllerDelete)
routerCart.get('/:id', auth, cartController.getCartControllerPut)
routerCart.get('/', auth, cartController.getCartController)

export default routerCart
