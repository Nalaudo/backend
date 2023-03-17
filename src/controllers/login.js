import loginService from '../services/login.js';
import logger from '../config/logger.js';

class LoginController {
    getLoginController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const email = req.user?.email
        loginService.loginCheck(req, res, email)
    }

    postLoginController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        res.redirect('/profile')
    }

    getFailLoginController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        res.render("pages/fail-login");
    }
}

const loginController = new LoginController()

export default loginController