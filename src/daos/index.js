import { config } from 'dotenv'
import CartsFs from './carts/CartsFs.js'
import ProductsFs from './products/ProductsFs.js'
import CartsMem from './carts/CartsMem.js'
import ProductsMem from './products/ProductsMem.js'
import ProductsFireb from './products/ProductsFireb.js'
import CartsFireb from './carts/CartsFireb.js'

config()

const instances = [
    {
        name: ProductsFs,
        id: 'fs',
        description: 'products'
    },
    {
        name: CartsFs,
        id: 'fs',
        description: 'carts'
    },
    {
        name: ProductsMem,
        id: 'mem',
        description: 'products'
    },
    {
        name: CartsMem,
        id: 'mem',
        description: 'carts'
    },
    {
        name: ProductsFireb,
        id: 'fireb',
        description: 'products'
    },
    {
        name: CartsFireb,
        id: 'fireb',
        description: 'carts'
    },
    {
        name: ProductsMem,
        id: 'mongo',
        description: 'products'
    },
    {
        name: CartsMem,
        id: 'mongo',
        description: 'carts'
    }
]

const instance = instances.filter(i => i.id == process.env.INSTANCE)

const res = {
    [instance[0].description]: instance[0].name,
    [instance[1].description]: instance[1].name,
}

export default res