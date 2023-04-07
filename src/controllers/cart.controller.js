import cartService from '#services/cart.service.js'

class CartController {
  deleteCartController = async (req, res) => {
    const user = req.user
    await cartService.deleteCart(user)
    res.status(200).json({ success: 'Cart deleted' })
  }

  putCartController = async (req, res) => {
    const user = req.user
    const id = req.params.id
    await cartService.findProductUpdateCart(id, user)
    res.status(200).json({ success: 'Cart updated' })
  }

  getCartController = async (req, res) => {
    const userCart = req.user.cart
    res.status(200).json(userCart)
  }
}

const cartController = new CartController()

export default cartController
