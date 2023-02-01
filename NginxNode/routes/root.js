module.exports = function root(app) {
    app.get('/', (req, res) => {
        const email = req.user?.email
        const port = process.argv[2]
        res.render('pages/socket.ejs', { email, port });
    });
}