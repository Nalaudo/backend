const { logoutReq } = require('../services/logout');
const logger = require('../src/config/logger');

const getLogoutController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email;
    logoutReq(req, res, email)
}

module.exports = { getLogoutController }