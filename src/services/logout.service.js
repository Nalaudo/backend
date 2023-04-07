class LogoutService {
  logoutReq = (req, res, next) => {
    req.logout(function (err) {
      if (err) { return next(err) }
      res.json({ success: 'Logged out' })
    })
  }
}

const logoutService = new LogoutService()

export default logoutService
