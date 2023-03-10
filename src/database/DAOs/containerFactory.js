const ContainerMem = require('./containerMem')
const ContainerMongo = require('./containerMongo')

class ContainerFactory {
  constructor() {
    if (ContainerFactory.instance) {
      return ContainerFactory.instance;
    }
    ContainerFactory.instance = this;
  }
  static get(coll, tipo) {
    switch (tipo) {
      case "mem":
        return new ContainerMem(coll);
      case "mongo":
        return new ContainerMongo(coll);
      default:
        return new ContainerMem(coll);
    }
  }
}
module.exports = ContainerFactory;