import cartService from '../services/cart.js';
import logger from '../config/logger.js';

class CartController {
    getCartControllerDelete = async (req, res) => {
        const user = req.user
        await cartService.deleteCart(user)
        res.redirect('/cart')
    }
    getCartControllerPut = async (req, res) => {
        const user = req.user
        const id = req.params.id
        await cartService.findProdUpdateCart(id, user)
        res.redirect('/cart');
    }

    getCartController = async (req, res) => {
        const user = req.user
        const email = req.user?.email
        const userCart = user.cart
        res.render('pages/cart.ejs', { email, userCart });
    }
}

const cartController = new CartController()

export default cartController