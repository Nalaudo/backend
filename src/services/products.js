import ContainerFactory from '../database/DAOs/containerFactory.js'
import { PERSISTENCE } from '#config/config.js'

class ProductsService {
  constructor () {
    this.productsDao = ContainerFactory.get('products', PERSISTENCE)
  }

  getAllProducts = async () => {
    return await this.productsDao.getAll()
  }

  getProduct = async (id) => {
    return await this.productsDao.getById(id)
  }

  putProduct = async (id) => {
    return await this.productsDao.getById(id)
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