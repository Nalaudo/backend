import logger from '../config/logger.js';
import organicsService from '../services/organics.js';

class OrganicsController {
    getOrganicsController = async (req, res) => {
        const organics = await organicsService.findOrganics()
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        // const email = req.user?.email
        // res.render('pages/organics.ejs', { organics, email });
        res.json(organics);
    }
}

const organicsController = new OrganicsController()

export default organicsController