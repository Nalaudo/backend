class SupportController {
  getSupportController = (req, res) => {
    const user = req?.user
    res.render('pages/support', { user })
  }
}

const supportController = new SupportController()

export default supportController
