const passportAuth = require('../src/middleware/passportAuth');

module.exports = function login(app) {
    app.get('/login', (req, res) => {
        const email = req.user?.email;
        if (req.isAuthenticated()) {
            res.redirect('/profile');
        } else {
            res.render('pages/login', { email });
        }
    });
    app.get('/failLogin', (req, res) => {
        res.render("pages/fail-login");
    });
    app.post('/login', passportAuth.loginAuth(), (req, res) => {
        res.redirect('/profile')
    });
}