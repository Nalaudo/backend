import signupService from '../services/signup.js'

class SignupController {
  getSignupController = (req, res) => {
    const email = req.user?.email
    signupService.signupCheck(req, res, email)
  }

  getFailSignupController = (req, res) => {
    res.render('pages/fail-signup')
  }

  postSignupController = (req, res) => {
    res.redirect('/profile')
  }
}

const signupController = new SignupController()

export default signupController
