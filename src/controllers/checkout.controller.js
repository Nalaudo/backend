import checkoutService from '#services/checkout.service.js'

class CheckoutController {
  getCheckoutController = async (req, res) => {
    const user = req?.user
    const email = req.user?.email
    const cart = req.user?.cart
    await checkoutService.sendWspAndEmail(user, cart)
    res.render('pages/checkout.ejs', { email })
  }
}

const checkoutController = new CheckoutController()

export default checkoutController
