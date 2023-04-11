import Productucts from '../models/products.model.js'
import Users from '../models/users.model.js'

class CartMongo {
  async updateCart (user, newProduct) {
    const cart = user.cart
    let foundProduct = false

    const updatedCart = cart.map(product => {
      if (product._id.toString() === newProduct._id.toString()) {
        product.quantity += 1
        foundProduct = true
      }
      return product
    })

    if (!foundProduct) {
      newProduct.quantity = 1
      updatedCart.push(newProduct)
    }

    await Users.updateOne({ email: user.email }, { cart: updatedCart })
  }

  async deleteCartProd (user, rmProductId) {
    const userFinded = await Users.findById(user.id)

    if (!userFinded) {
      return 'User not found'
    }

    const productIndex = userFinded.cart.findIndex(product => product._id.toString() === rmProductId)

    if (productIndex === -1) {
      return 'Product not found in cart'
    }

    userFinded.cart.splice(productIndex, 1)

    await userFinded.save()
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
