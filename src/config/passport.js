import Users from '#database/models/users.model.js'
import mailer from '#utils/nodemailer.js'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

const passportConfig = () => {
  function createHash (password) {
    return bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(10),
      null)
  }

  function isValidPassword (user, password) {
    return bcrypt.compareSync(password, user.password)
  }

  passport.use('login', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      Users.findOne({ email }, (err, user) => {
        if (err) return done(err)

        if (!user) {
          return done(null, false)
        }

        if (!isValidPassword(user, password)) {
          return done(null, false)
        }

        return done(null, user)
      })
    })
  )

  passport.use('signup', new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password'
    },
    (req, email, password, done) => {
      Users.findOne({ email }, function (err, user) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          const { passwordRepeat } = req.body
          if (password === passwordRepeat) {
            if (err) {
              return done(err)
            }

            if (user) {
              return done(null, false)
            }

            const newUser = {
              email,
              password: createHash(password),
              nombre: req.body.name,
              direccion: req.body.adress,
              edad: req.body.age,
              telefono: '+' + `${req.body.countryCode}` + `${req.body.phone}`,
              avatar: req.file
            }

            Users.create(newUser, (err, userWithId) => {
              if (err) {
                return done(err)
              }
              mailer(userWithId, null, 'signupMail')
              return done(null, userWithId)
            })
          } else {
            return done(null, false)
          }
        } else {
          return done(null, false)
        }
      })
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser((id, done) => {
    Users.findById(id, done)
  })
}

export default passportConfig
