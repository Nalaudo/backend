const { calculateRandoms } = require('../services/randoms');
const logger = require('../src/config/logger');

const getRandomsController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    let cant = req.query.cant
    const msg = 'start'
    const port = process.argv[2]
    calculateRandoms(req, res, cant, msg, port)
}

module.exports = { getRandomsController }