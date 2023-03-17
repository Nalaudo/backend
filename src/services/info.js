import { fork } from 'child_process';
import logger from '../config/logger.js';

class InfoService {
    infoLogic = (req, res) => {
        const config = fork('./src/config/config');
        const msg = 'getInfo'
        config.send({ msg })
        config.on("message", (msg) => {
            const { INFO } = msg
            res.render('pages/info.ejs', { INFO });
        });
    }
}



const infoService = new InfoService()

export default infoService