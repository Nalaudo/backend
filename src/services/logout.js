class LogoutService {
  logoutReq = (req) => {
    req.logout(function (err) {
      if (err) return { error: 'Logout error' }
      else return { success: 'Successfully logged out' }
    })
  }
}

const logoutService = new LogoutService()

export default logoutService
