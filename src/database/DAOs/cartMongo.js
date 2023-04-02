import Productucts from '../models/products.js'
import Users from '../models/users.js'

class CartMongo {
  async updateCart (user, newProducts) {
    const cart = user.cart
    const newCart = [...cart, ...newProducts]
    const res = newCart.filter(element => {
      if (Object.keys(element).length !== 0) {
        return true
      }
      return false
    })
    await Users.updateOne({ email: user.email }, { cart: res })
  }

  async findProductById (id) {
    const product = await Productucts.findById(id).exec()
    return product
  }

  async deleteCart (user) {
    const cart = []
    const res = await Users.updateOne({ email: user.email }, { cart })
    return res
  }
}

export default CartMongo
