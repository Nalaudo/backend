import compression from 'compression'
import cors from 'cors'
import passport from 'passport'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import sessionPersistence from './sessionPersistence.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const expressMiddlewares = (app, express) => {
  app.use(cors())
  app.use(compression())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/public', express.static(__dirname + '/public'))
  sessionPersistence(app)
  app.use(passport.initialize())
  app.use(passport.session())
}

export default expressMiddlewares
