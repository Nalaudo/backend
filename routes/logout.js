const authMiddle = require('../src/middleware/auth');

module.exports = function logout(app) {
    app.get('/logout', authMiddle.auth, (req, res) => {
        const email = req.user?.email;
        req.logout(function (err) {
            if (err) console.log(err);
            else res.render('pages/logout', { email });
        });
    });
}