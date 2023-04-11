import cartController from '#controllers/cart.controller.js'
import auth from '#middlewares/auth.middleware.js'
import { Router } from 'express'

const routerCart = new Router()

routerCart.get('/delete', auth, cartController.deleteCartController)
routerCart.get('/delete/:id', auth, cartController.deleteCartProdController)
routerCart.get('/:id', auth, cartController.addToCartController)
routerCart.get('/', auth, cartController.getCartController)

export default routerCart
