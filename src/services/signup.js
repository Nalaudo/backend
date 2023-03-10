const logger = require('../config/logger');

const signupCheck = (req, res, email) => {
    if (req.isAuthenticated()) {
        res.redirect('/profile');
    } else {
        res.render('pages/signup', { email });
    }
}

module.exports = { signupCheck }