const Cart = require('../src/config/cart')
const cart = new Cart()

module.exports = function root(app) {
    app.get('/cart/:id', async (req, res) => {
        const id = req.params.id
        const prod = await cart.findProdById(id)
        console.log(prod)
        res.redirect('/cart');
    });
    app.get('/cart', async (req, res) => {
        const user = req.user
        const email = req.user?.email
        await cart.updateCart(user, arr)
        const userCart = cart.findCart(user)
        res.render('pages/cart.ejs', { email, userCart });
    });
}