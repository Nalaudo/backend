const config = require('../src/config/config')
const logger = require('../src/config/logger');

const getNotFoundController = (req, res) => {
    logger.warn('Ruta ' + req.originalUrl + ' no encontrada con método: ' + req.method)
    const email = req.user?.email;
    res.status(404).render("pages/404", { email });
}

module.exports = { getNotFoundController }