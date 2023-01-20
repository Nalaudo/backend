const config = require('../src/config/config')

module.exports = function notFound(app) {
    app.get('*', (req, res) => {
        const email = req.user?.email;
        res.status(404).render("pages/404", { email });
    });
}