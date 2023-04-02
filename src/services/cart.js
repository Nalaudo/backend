import CartFactory from '../database/DAOs/cartFactory.js'
import { PERSISTENCE } from '#config/config.js'

class CartService {
  constructor () {
    this.cartDao = CartFactory.get(PERSISTENCE)
  }

  deleteCart = async (user) => {
    return await this.cartDao.deleteCart(user)
  }

  findProductUpdateCart = async (id, user) => {
    const product = await this.cartDao.findProductById(id)
    return await this.cartDao.updateCart(user, product)
  }
}

const cartService = new CartService()

export default cartService
