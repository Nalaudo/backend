const logger = require('../config/logger');
const { findOrganics } = require('../services/organics');

const getOrganicsController = async (req, res) => {
    const organics = await findOrganics()
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email
    res.render('pages/organics.ejs', { organics, email });
}

module.exports = { getOrganicsController }