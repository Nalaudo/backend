class LoginService {
  loginCheck = (req) => {
    if (req.isAuthenticated()) {
      return { error: 'Already logged in' }
    } else {
      return { success: 'Successfully logged in' }
    }
  }
}

const loginService = new LoginService()

export default loginService
