import mailer from '#utils/nodemailer.js'
import bcrypt from 'bcryptjs'

const users = []

const passportMem = (passport, LocalStrategy) => {
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
      const user = users.find(user => user.email === email)
      if (!user) {
        return done(null, false)
      }
      if (!isValidPassword(user, password)) {
        return done(null, false)
      }
      return done(null, user)
    })
  )

  passport.use('signup', new LocalStrategy(
    {
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password'
    },
    (req, email, password, done) => {
      const user = users.find(user => user.email === email)
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        const { passwordRepeat } = req.body
        if (password === passwordRepeat) {
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
          users.push(newUser)
          mailer(newUser, null, 'signupMail')
          return done(null, newUser)
        } else {
          return done(null, false)
        }
      } else {
        return done(null, false)
      }
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.email)
  })

  passport.deserializeUser((email, done) => {
    const user = users.find(user => user.email === email)
    done(null, user)
  })
}

export default passportMem
