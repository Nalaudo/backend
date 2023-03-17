import inorganicsService from '../services/inorganics.js';
import logger from '../config/logger.js';

class InorganicsController {
    getInorganicsController = async (req, res) => {
        const inorganics = await inorganicsService.findInorganics()
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        // const email = req.user?.email
        // res.render('pages/inorganics.ejs', { inorganics, email });
        res.json(inorganics);
    }
}

const inorganicsController = new InorganicsController()

export default inorganicsController