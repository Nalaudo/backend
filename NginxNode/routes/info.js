const config = require('../src/config/config')

module.exports = function info(app) {
    app.get('/info', (req, res) => {
        const info = config.INFO
        res.render('pages/info.ejs', { info });
    });
}