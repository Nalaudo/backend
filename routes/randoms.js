const { fork } = require("child_process");

module.exports = function randoms(app) {
    app.get('/api/randoms', (req, res) => {
        let cant = req.query.cant
        const msg = 'start'
        let randoms = fork('../src/utils/randoms');
        if (cant) {
            randoms.send({ msg, cant });
            randoms.on("message", (msg) => {
                const { data } = msg;
                res.render('pages/randoms.ejs', { cant: data });
            });
        } else {
            cant = 100000000
            randoms.send({ msg, cant });
            randoms.on("message", (msg) => {
                const { data } = msg;
                res.render('pages/randoms.ejs', { cant: data });
            });
        }
    });
}