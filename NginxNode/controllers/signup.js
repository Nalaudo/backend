const { signupCheck } = require('../services/signup');
const logger = require('../src/config/logger');

const getSignupController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email;
    signupCheck(req, res, email)
}

const getFailSignupController = (req, res) => {
    res.render("pages/fail-signup");
}

const postSignupController = (req, res) => {
    res.redirect('/profile');
}

module.exports = { getSignupController, getFailSignupController, postSignupController }