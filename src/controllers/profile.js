const logger = require('../config/logger');

const getProfileController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const user = req?.user
    res.render('pages/profile', { user })
}

module.exports = { getProfileController }