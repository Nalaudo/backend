import CryptoJS from 'crypto-js'
import config from '#config/config.js'
import sessionMem from './sessionMem.js'
import sessionMongo from './sessionMongo.js'

config.secret = generateSecretKey()

setInterval(() => {
  config.secret = generateSecretKey()
}, 600000)

function generateSecretKey () {
  return CryptoJS.lib.WordArray.random(32).toString()
}

const sessionPersistence = (app) => {
  if (config.persistence === 'mongo') {
    return sessionMongo(app)
  } else {
    return sessionMem(app)
  }
}

export default sessionPersistence
