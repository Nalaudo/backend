import ContainerMem from './containerMem.js';
import ContainerMongo from './containerMongo.js';

class ContainerFactory {
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
export default ContainerFactory;