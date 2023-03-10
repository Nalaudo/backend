const Products = require('../models/products');
const Users = require('../models/users');
const logger = require('../../config/logger');

class CartMongo {

    async updateCart(user, newProds) {
        try {
            const cart = user.cart;
            const newCart = [...cart, ...newProds];
            const res = newCart.filter(element => {
                if (Object.keys(element).length !== 0) {
                    return true;
                }
                return false;
            });
            await Users.updateOne({ email: user.email }, { cart: res });
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
            const cart = [];
            const res = await Users.updateOne({ email: user.email }, { cart: cart });
            return res;
        } catch (error) {
            logger.error(error)
        }
    }

}



module.exports = CartMongo;