import config from './config.js'
import passportMem from './passportMem.js'
import passportMongo from './passportMongo.js'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

const passportConfig = () => {
  if (config.persistence === 'mongo') {
    return passportMongo(passport, LocalStrategy)
  } else {
    return passportMem(passport, LocalStrategy)
  }
}

export default passportConfig
