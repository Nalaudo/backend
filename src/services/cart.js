import CartFactory from '../database/DAOs/cartFactory.js';
import logger from '../config/logger.js';

class CartService {
    constructor() {
        this.cartDao = CartFactory.get(process.env.PERSISTENCY)
    }

    deleteCart = async (user) => {
        return await this.cartDao.deleteCart(user)
    }

    findProdUpdateCart = async (id, user) => {
        const prod = await this.cartDao.findProdById(id)
        return await this.cartDao.updateCart(user, prod)
    }
}

const cartService = new CartService()


export default cartService