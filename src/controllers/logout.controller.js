import logoutService from '#services/logout.service.js'

class LogoutController {
  getLogoutController = (req, res, next) => {
    logoutService.logoutReq(req, res, next)
  }
}

const logoutController = new LogoutController()

export default logoutController
