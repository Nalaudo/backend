import randomsService from '../services/randoms.js';
import logger from '../config/logger.js';

class RandomsController {
    getRandomsController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        let cant = req.query.cant
        const msg = 'start'
        const port = process.argv[2]
        randomsService.calculateRandoms(req, res, cant, msg, port)
    }
}

const randomsController = new RandomsController()

export default randomsController