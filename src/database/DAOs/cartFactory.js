const CartMem = require('./cartMem')
const CartMongo = require('./cartMongo')

class CartFactory {
  constructor() {
    if (CartFactory.instance) {
      return CartFactory.instance;
    }
    CartFactory.instance = this;
  }
  static get(tipo) {
    switch (tipo) {
      case "mem":
        return new CartMem();
      case "mongo":
        return new CartMongo();
      default:
        return new CartMem();
    }
  }
}

module.exports = CartFactory;
