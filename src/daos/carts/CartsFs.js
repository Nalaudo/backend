import ContainerFs from '../../containers/ContainerFs.js';

class CartsFs extends ContainerFs {
    constructor() {
        super('src/DB/cart.json')
    }
}

export default CartsFs