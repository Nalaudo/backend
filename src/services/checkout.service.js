import config from '#config/config.js'
import CartFactory from '#database/DAOs/cartFactory.js'
import mailer from '#utils/nodemailer.js'

class CheckoutService {
  constructor () {
    this.checkoutDao = CartFactory.get(config.persistence)
  }

  sendEmail = async (user, cart) => {
    mailer(user, cart, 'checkoutMail')
    await this.checkoutDao.deleteCart(user)
  }
}

const checkoutService = new CheckoutService()

export default checkoutService
