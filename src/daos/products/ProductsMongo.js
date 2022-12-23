import ContainerMongo from '../../containers/ContainerMongo.js';

class ProductsMongo extends ContainerMongo {
    constructor() {
        super('products')
    }
}

export default ProductsMongo