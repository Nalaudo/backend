const logger = require('../config/logger');

const loginCheck = (req, res, email) => {
    if (req.isAuthenticated()) {
        return res.redirect('/profile');
    } else {
        return res.render('pages/login', { email });
    }
}

module.exports = { loginCheck }