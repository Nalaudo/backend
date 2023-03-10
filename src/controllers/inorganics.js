const { findInorganics } = require('../services/inorganics');
const logger = require('../config/logger');

const getInorganicsController = async (req, res) => {
    const inorganics = await findInorganics()
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email
    res.render('pages/inorganics.ejs', { inorganics, email });
}

module.exports = { getInorganicsController }