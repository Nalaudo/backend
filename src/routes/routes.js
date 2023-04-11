import routerCart from './cart.routes.js'
import routerCheckout from './checkout.routes.js'
import routerLogin from './login.routes.js'
import routerLogout from './logout.routes.js'
import routerProduct from './products.routes.js'
import routerProfile from './profile.routes.js'
import routerRoot from './root.routes.js'
import routerSignup from './signup.routes.js'

const expressRoutes = (app) => {
  app.use('/', routerRoot)
  app.use('/cart', routerCart)
  app.use('/checkout', routerCheckout)
  app.use('/profile', routerProfile)
  app.use('/login', routerLogin)
  app.use('/logout', routerLogout)
  app.use('/api/products', routerProduct)
  app.use('/signup', routerSignup)
}

export default expressRoutes
