import config from '#config/config.js'
import CryptoJS from 'crypto-js'
import session from 'express-session'

config.secret = generateSecretKey()

setInterval(() => {
  config.secret = generateSecretKey()
}, 600000)

function generateSecretKey () {
  return CryptoJS.lib.WordArray.random(32).toString()
}

const sessionMem = (app) => {
  return (
    app.use(session({
      secret: config.secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600000
      }
    }))
  )
}

export default sessionMem
