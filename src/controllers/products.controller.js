import productsService from '#services/products.service.js'

class ProductsController {
  getAllProductsController = async (req, res) => {
    const products = await productsService.getAllProducts()
    res.json(products)
  }

  getProductController = async (req, res) => {
    const { id } = req.params
    const product = await productsService.getProduct(id)
    res.json(product)
  }

  postProductController = async (req, res) => {
    const body = req.body
    const product = await productsService.postProduct(body)
    res.json(product)
  }

  putProductController = async (req, res) => {
    const { id } = req.params
    const { title, description, features, thumbnail, category, price, stock } = req.body
    const product = await productsService.putProduct(id, title, description, features, thumbnail, category, price, stock)
    res.json(product)
  }

  deleteProductController = async (req, res) => {
    const { id } = req.params
    await productsService.deleteProduct(id)
    res.json({ success: 'Productucto borrado' })
  }

  deleteAllProductsController = async (req, res) => {
    await productsService.deleteAllProducts()
    res.json({ success: 'Todos los productos borrados' })
  }
}

const productsController = new ProductsController()

export default productsController
