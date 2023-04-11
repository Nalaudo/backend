class ProfileController {
  getProfileController = (req, res) => {
    const user = req?.user
    res.render('pages/profile', { user })
  }
}

const profileController = new ProfileController()

export default profileController
