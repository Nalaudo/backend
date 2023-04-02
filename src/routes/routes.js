import routerCart from './cart.js'
import routerCheckout from './checkout.js'
import routerLogin from './login.js'
import routerLogout from './logout.js'
import routerProduct from './products.js'
import routerSignup from './signup.js'

const expressRoutes = (app) => {
  app.use('/cart', routerCart)
  app.use('/checkout', routerCheckout)
  app.use('/login', routerLogin)
  app.use('/logout', routerLogout)
  app.use('/api/products', routerProduct)
  app.use('/signup', routerSignup)
}

export default expressRoutes
