const fakerProds = require('../src/mock/faker');
const authMiddle = require('../src/middleware/auth');

module.exports = function test(app) {
    app.get('/api/productosTest', authMiddle.auth, (req, res) => {
        res.render('pages/prods-test.ejs', { fakerProds });
    });
}