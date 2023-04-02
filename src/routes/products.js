import { Router } from 'express'
import productsController from '../controllers/products.js'

const routerProduct = new Router()

routerProduct.get('/', productsController.getAllProductsController)
routerProduct.get('/:id', productsController.getProductController)
routerProduct.put('/:id', productsController.putProductController)
routerProduct.delete('/:id', productsController.deleteProductController)
routerProduct.delete('/', productsController.deleteAllProductsController)

export default routerProduct
