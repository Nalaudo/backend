class SignupService {
  signupCheck = (req) => {
    if (req.isAuthenticated()) {
      return { error: 'Already logged in, you have an account' }
    }
  }
}

const signupService = new SignupService()

export default signupService
