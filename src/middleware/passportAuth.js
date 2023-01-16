const signupAuth = (passport) => passport.authenticate('signup', { failureRedirect: '/failSignup' })
const loginAuth = (passport) => passport.authenticate('login', { failureRedirect: '/failLogin' })

module.exports = { signupAuth, loginAuth }