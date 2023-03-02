const cart = require('../database/cart');
const { deleteCart, findProdUpdateCart, getCart } = require('../services/cart');
const logger = require('../src/config/logger');

const getCartControllerDelete = async (req, res) => {
    const user = req.user
    await deleteCart(user)
    res.redirect('/cart')
}
const getCartControllerPut = async (req, res) => {
    const user = req.user
    const id = req.params.id
    await findProdUpdateCart(id, user)
    res.redirect('/cart');
}

const getCartController = async (req, res) => {
    const user = req.user
    const email = req.user?.email
    const userCart = await getCart(user)
    res.render('pages/cart.ejs', { email, userCart });
}



module.exports = { getCartControllerDelete, getCartControllerPut, getCartController }