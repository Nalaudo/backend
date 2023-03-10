const fakerProds = require('../mock/faker');
const logger = require('../config/logger');

const getTestController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email
    res.render('pages/prods-test.ejs', { fakerProds, email });
}

module.exports = { getTestController }