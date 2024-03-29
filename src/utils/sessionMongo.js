import config from '#config/config.js'
import MongoStore from 'connect-mongo'
import CryptoJS from 'crypto-js'
import session from 'express-session'

config.secret = generateSecretKey()

setInterval(() => {
  config.secret = generateSecretKey()
}, 600000)

function generateSecretKey () {
  return CryptoJS.lib.WordArray.random(32).toString()
}

const sessionMongo = (app) => {
  return (
    app.use(session({
      store: MongoStore.create({
        mongoUrl: config.mongo_connection,
        mongoOptions: {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      }),
      secret: config.secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600000
      }
    }))
  )
}

export default sessionMongo
