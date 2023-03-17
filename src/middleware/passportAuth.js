import passport from 'passport';
import logger from '../config/logger.js';

class PassportAuth {
    signupAuth = () => passport.authenticate('signup', { failureRedirect: '/signup/failSignup' })
    loginAuth = () => passport.authenticate('login', { failureRedirect: '/login/failLogin' })
}

const passportAuth = new PassportAuth()

export default passportAuth