class RootController {
  getRootController = (req, res) => {
    res.redirect('/profile')
  }
}

const rootController = new RootController()

export default rootController
