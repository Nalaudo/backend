const logger = require('../config/logger');
async function auth(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    return res.status(401).redirect('/login')
}

module.exports = { auth }