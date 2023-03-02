const passport = require('passport');
const logger = require('../config/logger');

const signupAuth = () => passport.authenticate('signup', { failureRedirect: '/signup/failSignup' })
const loginAuth = () => passport.authenticate('login', { failureRedirect: '/login/failLogin' })

module.exports = { signupAuth, loginAuth }