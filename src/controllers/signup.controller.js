import signupService from '#services/signup.service.js'

class SignupController {
  getSignupController = (req, res) => {
    const alreadyAuth = signupService.signupCheck(req)
    if (alreadyAuth?.error) {
      res.json(alreadyAuth)
    } else {
      res.render('pages/signup')
    }
  }

  getFailSignupController = (req, res) => {
    res.json({ error: 'Already exists an account for your email' })
  }

  postSignupController = (req, res) => {
    res.json({ success: 'Signup success' })
  }
}

const signupController = new SignupController()

export default signupController
