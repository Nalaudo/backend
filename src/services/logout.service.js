class LogoutService {
  logoutReq = (req, res, next) => {
    req.logout(function (err) {
      if (err) { return next(err) }
      res.redirect('/login')
    })
  }
}

const logoutService = new LogoutService()

export default logoutService
