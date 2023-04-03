import passport from 'passport'

class PassportAuth {
  signupAuth = () => passport.authenticate('signup', { failureFlash: 'Signup error' })
  loginAuth = () => passport.authenticate('login', { failureRedirect: '/login/failLogin' })
}

const passportAuth = new PassportAuth()

export default passportAuth
