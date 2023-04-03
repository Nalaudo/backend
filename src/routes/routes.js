import routerCart from './cart.routes.js'
import routerCheckout from './checkout.routes.js'
import routerLogin from './login.routes.js'
import routerLogout from './logout.routes.js'
import routerProduct from './products.routes.js'
import routerSignup from './signup.routes.js'

const expressRoutes = (app) => {
  app.use('/cart', routerCart)
  app.use('/checkout', routerCheckout)
  app.use('/login', routerLogin)
  app.use('/logout', routerLogout)
  app.use('/api/products', routerProduct)
  app.use('/signup', routerSignup)
}

export default expressRoutes
