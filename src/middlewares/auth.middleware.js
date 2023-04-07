async function auth (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.status(401).json({ forbidden: 'You must be logged in' })
}

export default auth
