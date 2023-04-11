import config from '#config/config.js'
import CartFactory from '#database/DAOs/cartFactory.js'

class CartService {
  constructor () {
    this.cartDao = CartFactory.get(config.persistence)
  }

  deleteCart = async (user) => {
    return await this.cartDao.deleteCart(user)
  }

  deleteCartProd = async (user, id) => {
    return await this.cartDao.deleteCartProd(user, id)
  }

  findProductUpdateCart = async (id, user) => {
    const product = await this.cartDao.findProductById(id)
    return await this.cartDao.updateCart(user, product)
  }
}

const cartService = new CartService()

export default cartService
