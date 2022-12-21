import ContainerFs from '../../containers/ContainerFs.js';

class ProductsFs extends ContainerFs {
    constructor() {
        super('src/DB/products.json')
    }
}

export default ProductsFs