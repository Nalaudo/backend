import logoutService from '../services/logout.js'

class LogoutController {
  getLogoutController = (req, res) => {
    res.json(logoutService.logoutReq(req))
  }
}

const logoutController = new LogoutController()

export default logoutController
