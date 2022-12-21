import express, { json, urlencoded } from 'express';
import CartsFs from './src/daos/carts/CartsFs.js';
const { Router } = express;
const app = express();
const routerProductos = Router();
const routerCarrito = Router();
const port = process.env.PORT || 8080;

import instance from "./src/daos/index.js";
const product = new instance.products;
const cart = new instance.carts;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/public', express.static('public'));
app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});

//GENERAL

const productos = await product.syncGetAll()
console.log(productos)

const cartList = await cart.syncGetAll()

let adminStatus = true

app.get('/', (req, res) => {
    res.render('pages/inicio.ejs')
});

app.get('/prodform', (req, res, next) => {
    if (adminStatus == true) {
        next()
    } else {
        res.json({ error: -1, descripción: `ruta '${req.originalUrl}' método '${req.method}' no autorizada` })
    }
},
    (req, res) => {
        res.render('pages/prodform.ejs')
    }
);

app.get('/cartform', (req, res) => {
    res.render('pages/cartform.ejs')
});


//PRODUCTOS

routerProductos.get('/:id?', async (req, res) => {
    const { id } = req.params;
    if (id) {
        const productoEncontrado = await product.getById(id);
        const error = { error: 'Error: Producto no encontrado' }
        if (productoEncontrado) {
            res.render('pages/prod.ejs', { producto: productoEncontrado, error: false });
        } else {
            res.render('pages/prod.ejs', { producto: productoEncontrado, error: error });
        }
    } else {
        res.render('pages/productos.ejs', { adminStatus: adminStatus, productos: productos })
    }
});

routerProductos.post('/', (req, res, next) => {
    if (adminStatus == true) {
        next()
    } else {
        res.json({ error: -1, descripción: `ruta '${req.originalUrl}' método '${req.method}' no autorizada` })
    }
},
    async (req, res) => {
        try {
            let { body } = req;
            let date = { timestamp: Date.now() }
            body = { ...body, ...date }
            await product.save(body);
            res.redirect('/api/productos');
        } catch (error) {
            console.log(error)
        }

    }
);

//desde postman
routerProductos.put('/:id', (req, res, next) => {
    if (adminStatus == true) {
        next()
    } else {
        res.json({ error: -1, descripción: `ruta '${req.originalUrl}' método '${req.method}' no autorizada` });
    }
},
    async (req, res) => {
        try {
            const id = req.params.id;
            const { title, price, thumbnail, description, code, stock } = req.body;
            await product.updateById(id, title, price, thumbnail, description, code, stock);
            res.redirect(`/api/productos/${id}`);
        } catch (error) {
            console.log(error)
        }
    }
);

//desde postman
routerProductos.delete('/:id', (req, res, next) => {
    if (adminStatus == true) {
        next()
    } else {
        res.json({ error: -1, descripción: `ruta '${req.originalUrl}' método '${req.method}' no autorizada` });
    }
},
    async (req, res) => {
        try {
            const { id } = req.params;
            await product.deleteById(id);
            res.json('Producto borrado');
        } catch (error) {
            console.log(error)
        }
    }
);


//CARRITO

routerCarrito.post('/', async (req, res) => {
    try {
        let { body } = req;
        let date = { timestamp: Date.now() }
        let cartProd1 = await product.getByTitle(body.prod1)
        let prods = [{ ...cartProd1 }]
        let cartEnd = { prods, ...date }
        await cart.save(cartEnd)
        let createdCart = undefined
        if (cart.arr) {
            createdCart = cartList.length
        } else {
            createdCart = cartList.length + 1
        }
        res.redirect(`/api/carrito/${createdCart}/productos`);
    } catch (error) {
        console.log(error)
    }
});

routerCarrito.get('/:id/productos', async (req, res) => {
    const { id } = req.params;
    const carritoEncontrado = await cart.getById(id);
    const error = { error: 'Error: Carrito no encontrado' }
    if (carritoEncontrado) {
        res.render('pages/cart.ejs', { carrito: carritoEncontrado, error: false });
    } else {
        res.render('pages/cart.ejs', { carrito: carritoEncontrado, error: error });
    }
});

routerCarrito.post('/:id/productos', async (req, res) => {
    let { id } = req.params;
    const carritoEncontrado = await cart.getById(id);
    const error = { error: 'Error: Carrito no encontrado' }
    let { body } = req;
    let newProdToCart = await product.getById(body.prodId)
    await cart.saveNewProd(newProdToCart, id);
    if (carritoEncontrado) {
        res.render('pages/cart.ejs', { carrito: carritoEncontrado, error: false });
    } else {
        res.render('pages/cart.ejs', { carrito: carritoEncontrado, error: error });
    }
});

//desde postman
routerCarrito.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await cart.deleteById(id);
        res.json('Carrito borrado');
    } catch (error) {
        console.log(error)
    }

});

//desde postman
routerCarrito.delete('/:id/productos/:id_prod', async (req, res) => {
    try {
        const { id } = req.params;
        const { id_prod } = req.params;
        await cart.deleteProdById(id, id_prod);
        res.json('Producto borrado');
    } catch (error) {
        console.log(error)
    }

});


//ERRORES

app.all('*', (req, res) => {
    res.status(404).json({ error: -2, descripción: `ruta '${req.originalUrl}' método '${req.method}' no implementada` });
});