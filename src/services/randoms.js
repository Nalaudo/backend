import { fork } from 'child_process';
import logger from '../config/logger.js';

class RandomsService {
    calculateRandoms = (req, res, cant, msg, port) => {
        let randoms = fork('./src/utils/randoms');
        if (cant) {
            randoms.send({ msg, cant });
            randoms.on("message", (msg) => {
                const { data } = msg;
                res.render('pages/randoms.ejs', { cant: data, port });
            });
        } else {
            cant = 100000000
            randoms.send({ msg, cant });
            randoms.on("message", (msg) => {
                const { data } = msg;
                res.render('pages/randoms.ejs', { cant: data, port });
            });
        }
    }
}

const randomsService = new RandomsService()

export default randomsService