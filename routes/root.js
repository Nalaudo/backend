module.exports = function root(app) {
    app.get('/', (req, res) => {
        const email = req.user?.email
        res.render('pages/socket.ejs', { email });
    });
}