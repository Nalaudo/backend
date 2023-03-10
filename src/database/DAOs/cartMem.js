const Products = require('../models/products');
const Users = require('../models/users');
const logger = require('../../config/logger');

class CartMem {

    async updateCart(user, newProds) {
        try {
            const cart = user.cart;
            console.log(cart)
            cart.push(newProds)
            console.log(cart)
            return cart
        } catch (error) {
            logger.error(error);
        };
    }

    async findProdById(id) {
        try {
            const prod = await Products.findById(id).exec()
            return prod;
        } catch (error) {
            logger.error(error);
        };
    }

    async deleteCart(user) {
        try {
            const cart = user.cart;
            const res = await Users.updateOne({ email: user.email }, { cart: cart });
            return res;
        } catch (error) {
            logger.error(error)
        }
    }

}

module.exports = CartMem;