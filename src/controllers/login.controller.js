import loginService from '#services/login.service.js'

class LoginController {
  getLoginController = (req, res) => {
    loginService.loginCheck(req)
  }

  postLoginController = (req, res) => {
    res.redirect('/profile')
  }

  getFailLoginController = (req, res) => {
    res.render('pages/fail-login')
  }
}

const loginController = new LoginController()

export default loginController
