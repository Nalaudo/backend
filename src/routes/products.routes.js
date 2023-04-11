import productsController from '#controllers/products.controller.js'
import { Router } from 'express'

const routerProduct = new Router()

routerProduct.get('/', productsController.getAllProductsController)
routerProduct.get('/category/:category', productsController.getCategoryController)
routerProduct.get('/:id', productsController.getProductController)

routerProduct.post('/', productsController.postProductController)
routerProduct.put('/:id', productsController.putProductController)
routerProduct.delete('/:id', productsController.deleteProductController)
routerProduct.delete('/', productsController.deleteAllProductsController)

export default routerProduct
