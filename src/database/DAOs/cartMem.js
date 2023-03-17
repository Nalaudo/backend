import ContainerMem from './containerMem.js';
const prods = new ContainerMem('products')
const users = new ContainerMem('users')
import logger from '../../config/logger.js';

class CartMem {

    async updateCart(user, newProds) {
        try {
            const cart = user.cart;
            cart.push(newProds)
            return cart
        } catch (error) {
            logger.error(error);
        };
    }

    async findProdById(id) {
        try {
            const prod = prods.getById(id);
            return prod;
        } catch (error) {
            logger.error(error);
        };
    }

    async deleteCart(user) {
        try {
            const getUsers = users.getAll()
            const userFind = getUsers.find(({ u }) => u.email === user.email);
            userFind.cart = []
            return userFind;
        } catch (error) {
            logger.error(error)
        }
    }

}

export default CartMem;