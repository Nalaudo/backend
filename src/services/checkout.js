import mailer from '../utils/nodemailer.js';
import twilioWSP from '../utils/twilioWSP.js';
import CartFactory from '../database/DAOs/cartFactory.js';
import logger from '../config/logger.js';

class CheckoutService {
    constructor() {
        this.checkoutDao = CartFactory.get(process.env.PERSISTENCY)
    }

    sendWspAndEmail = async (user, cart) => {
        twilioWSP(user)
        twilioWSP(process.env.TWILIO_ADMIN_WSP)
        mailer(user, cart, 'checkoutMail')
        await this.checkoutDao.deleteCart(user)
    }
}

const checkoutService = new CheckoutService()

export default checkoutService