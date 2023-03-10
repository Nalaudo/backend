const mailer = require('../utils/nodemailer');
const twilioWSP = require('../utils/twilioWSP');
const Cart = require('../database/DAOs/cartFactory')
const logger = require('../config/logger');

class CheckoutService {
    constructor() {
        this.checkoutDao = Cart.get(process.env.PERSISTENCY)
    }

    async sendWspAndEmail(user, cart) {
        twilioWSP(user)
        twilioWSP(process.env.TWILIO_ADMIN_WSP)
        mailer(user, cart, 'checkoutMail')
        await this.checkoutDao.deleteCart(user)
    }
}

const checkoutService = new CheckoutService()

module.exports = checkoutService