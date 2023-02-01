const authMiddle = require('../src/middleware/auth');

module.exports = function profile(app) {
    app.get('/profile', authMiddle.auth, (req, res) => {
        const email = req.user?.email;
        res.render('pages/profile', { email })
    });
}