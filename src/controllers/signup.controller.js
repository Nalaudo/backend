import signupService from '#services/signup.service.js'

class SignupController {
  getSignupController = (req, res) => {
    const alreadyAuth = signupService.signupCheck(req)
    const user = req?.user
    if (alreadyAuth?.error) {
      res.json(alreadyAuth)
    } else {
      res.render('pages/signup', { user })
    }
  }

  getFailSignupController = (req, res) => {
    res.json({ error: 'Already exists an account for your email' })
  }

  postSignupController = (req, res) => {
    res.redirect('/profile')
  }
}

const signupController = new SignupController()

export default signupController
