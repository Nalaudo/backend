const checkoutService = require('../services/checkout');
const logger = require('../config/logger');

const getCheckoutController = async (req, res) => {
    const user = req?.user
    const email = req.user?.email
    const cart = req.user?.cart
    await checkoutService.sendWspAndEmail(user, cart)
    res.render('pages/checkout.ejs', { email });
}

module.exports = { getCheckoutController }