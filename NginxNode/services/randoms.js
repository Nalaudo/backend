const { fork } = require("child_process");
const logger = require('../src/config/logger');

const calculateRandoms = (req, res, cant, msg, port) => {
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

module.exports = { calculateRandoms }