const { fork } = require("child_process");
const logger = require('../config/logger');

const infoLogic = (req, res) => {
    const config = fork('./src/config/config');
    const msg = 'getInfo'
    config.send({ msg })
    config.on("message", (msg) => {
        const { INFO } = msg
        res.render('pages/info.ejs', { INFO });
    });
}

module.exports = { infoLogic }