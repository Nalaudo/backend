import session from 'express-session'
import MongoStore from 'connect-mongo'

const sessionPersistence = (app) => {
  if (process.env.PERSISTENCE === 'mongo') {
    return (
      app.use(session({
        store: MongoStore.create({
          mongoUrl: process.env.MONGO_CONNECTION,
          mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 600000
        }
      }))
    )
  } else if (process.env.PERSISTENCE === 'mem') {
    return (
      this.app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 600000
        }
      }))
    )
  }
}

export default sessionPersistence
