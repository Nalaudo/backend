import loginService from '#services/login.service.js'

class LoginController {
  getLoginController = (req, res) => {
    const alreadyAuth = loginService.loginCheck(req)
    if (alreadyAuth?.error) {
      res.status(200).json(alreadyAuth)
    } else {
      res.render('pages/login')
    }
  }

  postLoginController = (req, res) => {
    res.status(200).json({ success: 'Login success' })
  }

  getFailLoginController = (req, res) => {
    res.status(400).json({ error: 'Login error' })
  }
}

const loginController = new LoginController()

export default loginController
