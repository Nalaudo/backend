const Cart = require('../database/DAOs/cartFactory')
const logger = require('../config/logger');

class CartService {
    constructor() {
        this.cartDao = Cart.get(process.env.PERSISTENCY)
    }

    async deleteCart(user) {
        return await this.cartDao.deleteCart(user)
    }

    async findProdUpdateCart(id, user) {
        console.log(process.env.PERSISTENCY)
        const prod = await this.cartDao.findProdById(id)
        return await this.cartDao.updateCart(user, prod)
    }

}

const cartService = new CartService()


module.exports = cartService