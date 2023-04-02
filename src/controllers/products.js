import productsService from '../services/products.js'

class ProductsController {
  getAllProductsController = async (req, res) => {
    try {
      const products = await productsService.getAllProducts()
      res.json(products)
    } catch (error) {
      console.log(error)
    }
  }

  getProductController = async (req, res) => {
    try {
      const { id } = req.params
      const product = await productsService.getProduct(id)
      res.json(product)
    } catch (error) {
      console.log(error)
    }
  }

  putProductController = async (req, res) => {
    try {
      const { id } = req.params
      const product = await productsService.putProduct(id)
      res.json(product)
    } catch (error) {
      console.log(error)
    }
  }

  deleteProductController = async (req, res) => {
    try {
      const { id } = req.params
      await productsService.deleteProduct(id)
      res.json({ success: 'Productucto borrado' })
    } catch (error) {
      console.log(error)
    }
  }

  deleteAllProductsController = async (req, res) => {
    try {
      await productsService.deleteAllProducts()
      res.json({ success: 'Todos los productos borrados' })
    } catch (error) {
      console.log(error)
    }
  }
}

const productsController = new ProductsController()

export default productsController
