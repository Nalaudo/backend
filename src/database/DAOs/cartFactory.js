import CartMem from './cartMem.js'
import CartMongo from './cartMongo.js'

class CartFactory {
  static get (tipo) {
    switch (tipo) {
      case 'mem':
        return new CartMem()
      case 'mongo':
        return new CartMongo()
      default:
        return new CartMem()
    }
  }
}

export default CartFactory
