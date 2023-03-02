const mailer = require('../src/utils/nodemailer');
const twilioWSP = require('../src/utils/twilioWSP');
const cartOptions = require('../database/cart')
const logger = require('../src/config/logger');

const sendWspAndEmail = async (user, cart) => {
    twilioWSP(user)
    twilioWSP(process.env.TWILIO_ADMIN_WSP)
    mailer(user, cart, 'checkoutMail')
    await cartOptions.deleteCart(user)
}

module.exports = { sendWspAndEmail }