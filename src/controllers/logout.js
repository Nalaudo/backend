import logoutService from '../services/logout.js';
import logger from '../config/logger.js';

class LogoutController {
    getLogoutController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const email = req.user?.email;
        logoutService.logoutReq(req, res, email)
    }
}

const logoutController = new LogoutController()

export default logoutController