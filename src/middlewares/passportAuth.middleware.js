import passport from 'passport'

class PassportAuth {
  signupAuth = () => passport.authenticate('signup', { failWithError: 'Signup error' })
  loginAuth = () => passport.authenticate('login', { failWithError: 'Login error' })
}

const passportAuth = new PassportAuth()

export default passportAuth
