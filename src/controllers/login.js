const { loginCheck } = require('../services/login');
const logger = require('../config/logger');

const getLoginController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email
    loginCheck(req, res, email)
}

const postLoginController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    res.redirect('/profile')
}

const getFailLoginController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    res.render("pages/fail-login");
}

module.exports = { getLoginController, postLoginController, getFailLoginController }