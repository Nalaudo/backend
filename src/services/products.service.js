import config from '#config/config.js'
import ContainerFactory from '#database/DAOs/containerFactory.js'

class ProductsService {
  constructor () {
    this.productsDao = ContainerFactory.get('products', config.persistence)
  }

  getAllProducts = async () => {
    return await this.productsDao.getAll()
  }

  getProduct = async (id) => {
    return await this.productsDao.getById(id)
  }

  getCategory = async (category) => {
    return await this.productsDao.getByCategory(category)
  }

  postProduct = async (product) => {
    return await this.productsDao.save(product)
  }

  putProduct = async (id, title, description, features, thumbnail, category, price, stock) => {
    return await this.productsDao.updateById(id, title, description, features, thumbnail, category, price, stock)
  }

  deleteProduct = async (id) => {
    return await this.productsDao.deleteById(id)
  }

  deleteAllProducts = async () => {
    return await this.productsDao.deleteAll()
  }
}
const productsService = new ProductsService()

export default productsService
