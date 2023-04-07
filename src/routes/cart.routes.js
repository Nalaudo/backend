import cartController from '#controllers/cart.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerCart = new Router()

routerCart.delete('/:id', auth, cartController.deleteCartController)
routerCart.put('/:id', auth, cartController.putCartController)
routerCart.get('/', auth, cartController.getCartController)

export default routerCart
