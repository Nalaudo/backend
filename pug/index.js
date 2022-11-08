const express = require('express');
const app = express();
const port = 8080;
const Contenedor = require('./contenedor');
const contenedor = new Contenedor();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('inicio.pug');
});

app.get('/productos', async (req, res) => {
    const todos = await contenedor.getAll();
    res.render('productos.pug', { productos: todos });
});

app.get('/form', (req, res) => {
    res.render('form.pug');
});

app.post('/productos', async (req, res) => {
    const { body } = req;
    await contenedor.save(body);
    res.redirect('/form');
});

