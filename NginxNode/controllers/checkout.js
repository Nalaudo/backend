const { sendWspAndEmail } = require('../services/checkout');
const logger = require('../src/config/logger');

const getCheckoutController = async (req, res) => {
    const user = req?.user
    const email = req.user?.email
    const cart = req.user?.cart
    await sendWspAndEmail(user, cart)
    res.render('pages/checkout.ejs', { email });
}

module.exports = { getCheckoutController }