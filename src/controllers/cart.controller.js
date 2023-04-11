import cartService from '#services/cart.service.js'

class CartController {
  deleteCartController = async (req, res) => {
    const user = req.user
    await cartService.deleteCart(user)
    res.redirect('/cart')
  }

  deleteCartProdController = async (req, res) => {
    const user = req.user
    const id = req.params.id
    await cartService.deleteCartProd(user, id)
    res.redirect('/cart')
  }

  addToCartController = async (req, res) => {
    const user = req.user
    const id = req.params.id
    await cartService.findProductUpdateCart(id, user)
    res.redirect('/cart')
  }

  getCartController = async (req, res) => {
    const user = req.user
    res.render('pages/cart', { user })
  }
}

const cartController = new CartController()

export default cartController
