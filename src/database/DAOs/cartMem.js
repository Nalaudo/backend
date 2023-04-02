import ContainerMem from './containerMem.js'
const products = new ContainerMem('products')
const users = new ContainerMem('users')

class CartMem {
  async updateCart (user, newProducts) {
    const cart = user.cart
    cart.push(newProducts)
    return cart
  }

  async findProductById (id) {
    const product = products.getById(id)
    return product
  }

  async deleteCart (user) {
    const getUsers = users.getAll()
    const userFind = getUsers.find(({ u }) => u.email === user.email)
    userFind.cart = []
    return userFind
  }
}

export default CartMem
