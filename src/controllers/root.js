const logger = require('../config/logger');

const getRootController = (req, res) => {
    // logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email
    res.render('pages/socket.ejs', { email });
}

module.exports = { getRootController }