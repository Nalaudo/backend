import logoutService from '#services/logout.service.js'

class LogoutController {
  getLogoutController = (req, res) => {
    res.json(logoutService.logoutReq(req))
  }
}

const logoutController = new LogoutController()

export default logoutController
