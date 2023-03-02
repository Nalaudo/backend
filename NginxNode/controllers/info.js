const { infoLogic } = require('../services/info');
const logger = require('../src/config/logger');

const getInfoController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    infoLogic(req, res)
}

module.exports = { getInfoController }