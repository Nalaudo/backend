import prodsService from '../services/prod.js';
import logger from '../config/logger.js';

class ProdsController {
    getAllProdsController = async (req, res) => {
        try {
            logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
            const prods = await prodsService.getAllProds()
            res.json(prods);
        } catch (error) {
            res.json({ error: error });
        };
    }
    getProdController = async (req, res) => {
        try {
            logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
            const { id } = req.params;
            const prod = await prodsService.getProd(id)
            res.json(prod);
        } catch (error) {
            res.json({ error: error });
        };
    }
    putProdController = async (req, res) => {
        try {
            logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
            const { id } = req.params;
            const prod = await prodsService.putProd(id)
            res.json(prod);
        } catch (error) {
            res.json({ error: error });
        };
    }
    deleteProdController = async (req, res) => {
        try {
            logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
            const { id } = req.params;
            await prodsService.deleteProd(id)
            res.json({ success: "Producto borrado" });
        } catch (error) {
            res.json({ error: error });
        };
    }
    deleteAllProdsController = async (req, res) => {
        try {
            logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
            await prodsService.deleteAllProds()
            res.json({ success: "Todos los productos borrados" });
        } catch (error) {
            res.json({ error: error });
        };
    }
}

const prodsController = new ProdsController()

export default prodsController