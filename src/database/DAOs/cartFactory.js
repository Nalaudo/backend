const CartMem = require('./cartMem')
const CartMongo = require('./cartMongo')

class CartFactory {
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
