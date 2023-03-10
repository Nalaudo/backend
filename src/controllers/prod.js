const { getProd, putProd, deleteProd, deleteAllProds } = require('../services/prod');
const logger = require('../config/logger');

const getProdController = async (req, res) => {
    try {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const { id } = req.params;
        const prod = await getProd(id)
        res.json(prod);
    } catch (error) {
        res.json({ error: error });
    };
}
const putProdController = async (req, res) => {
    try {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const { id } = req.params;
        const prod = await putProd(id)
        res.json(prod);
    } catch (error) {
        res.json({ error: error });
    };
}
const deleteProdController = async (req, res) => {
    try {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const { id } = req.params;
        await deleteProd(id)
        res.json({ success: "Producto borrado" });
    } catch (error) {
        res.json({ error: error });
    };
}
const deleteAllProdsController = async (req, res) => {
    try {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        await deleteAllProds()
        res.json({ success: "Todos los productos borrados" });
    } catch (error) {
        res.json({ error: error });
    };
}

module.exports = { getProdController, putProdController, deleteProdController, deleteAllProdsController }