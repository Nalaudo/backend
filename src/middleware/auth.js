import logger from '../config/logger.js';
async function auth(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    return res.status(401).redirect('/login')
}

export default auth;