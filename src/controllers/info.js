import infoService from '../services/info.js';
import logger from '../config/logger.js';

class InfoController {
    getInfoController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        infoService.infoLogic(req, res)
    }
}

const infoController = new InfoController()

export default infoController