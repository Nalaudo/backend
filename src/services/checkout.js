import mailer from '../utils/nodemailer.js'
import CartFactory from '../database/DAOs/cartFactory.js'
import { PERSISTENCE } from '#config/config.js'

class CheckoutService {
  constructor () {
    this.checkoutDao = CartFactory.get(PERSISTENCE)
  }

  sendWspAndEmail = async (user, cart) => {
    mailer(user, cart, 'checkoutMail')
    await this.checkoutDao.deleteCart(user)
  }
}

const checkoutService = new CheckoutService()

export default checkoutService