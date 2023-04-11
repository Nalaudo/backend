import loginService from '#services/login.service.js'

class LoginController {
  getLoginController = (req, res) => {
    const alreadyAuth = loginService.loginCheck(req)
    const user = req?.user
    if (alreadyAuth?.error) {
      res.redirect('/profile')
    } else {
      res.status(200).render('pages/login', { user })
    }
  }

  postLoginController = (req, res) => {
    res.redirect('/profile')
  }

  getFailLoginController = (req, res) => {
    res.status(401).json({ error: 'Login error' })
  }
}

const loginController = new LoginController()

export default loginController
