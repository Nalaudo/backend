const Conatiner = require('../src/container');
const prods = new Conatiner("products");

module.exports = function prod(app) {
    app.get('/get/:id', (req, res) => {
        try {
            const { id } = req.params;
            const prod = prods.getById(id);
            res.json(prod);
        } catch (error) {
            res.json({ error: error });
        };
    });
    app.put('/update/:id', (req, res) => {
        try {
            const { id } = req.params;
            const prod = prods.getById(id);
            res.json(prod);
        } catch (error) {
            res.json({ error: error });
        };
    });
    app.delete('/:id', (req, res) => {
        try {
            const { id } = req.params;
            prods.deleteById(id);
            res.json({ success: "Producto borrado" });
        } catch (error) {
            res.json({ error: error });
        };
    });
    app.delete('/', (req, res) => {
        try {
            prods.deleteAll();
            res.json({ success: "Todos los productos borrados" });
        } catch (error) {
            res.json({ error: error });
        };
    });
}