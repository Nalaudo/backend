const fakerProds = require('../src/mock/faker');
const logger = require('../src/config/logger');

const getTestController = (req, res) => {
    logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
    const email = req.user?.email
    res.render('pages/prods-test.ejs', { fakerProds, email });
}

module.exports = { getTestController }