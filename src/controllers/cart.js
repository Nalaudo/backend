const cartService = require('../services/cart')
const logger = require('../config/logger');

const getCartControllerDelete = async (req, res) => {
    const user = req.user
    await cartService.deleteCart(user)
    res.redirect('/cart')
}
const getCartControllerPut = async (req, res) => {
    const user = req.user
    const id = req.params.id
    await cartService.findProdUpdateCart(id, user)
    res.redirect('/cart');
}

const getCartController = async (req, res) => {
    const user = req.user
    const email = req.user?.email
    const userCart = user.cart
    res.render('pages/cart.ejs', { email, userCart });
}



module.exports = { getCartControllerDelete, getCartControllerPut, getCartController }