import logger from '../config/logger.js';

class NotFoundController {
    getNotFoundController = (req, res) => {
        logger.warn('Ruta ' + req.originalUrl + ' no encontrada con método: ' + req.method)
        const email = req.user?.email;
        res.status(404).render("pages/404", { email });
    }
}

const notFoundController = new NotFoundController()

export default notFoundController