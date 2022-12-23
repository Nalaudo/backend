import ContainerMongo from '../../containers/ContainerMongo.js';

class CartsMongo extends ContainerMongo {
    constructor() {
        super('carts')
    }
}

export default CartsMongo