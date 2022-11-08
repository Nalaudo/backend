const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const port = 8080;
const Contenedor = require('./contenedor');
const contenedor = new Contenedor();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/pages',
        partialsDir: __dirname + '/views/partials',
    })
);

app.get('/', (req, res) => {
    res.render('pages/inicio.ejs');
});

app.get('/productos', async (req, res) => {
    const todos = await contenedor.getAll();
    res.render('pages/productos.ejs', { productos: todos });
});

app.get('/form', (req, res) => {
    res.render('pages/form.ejs');
});

app.post('/productos', async (req, res) => {
    const { body } = req;
    await contenedor.save(body);
    res.redirect('/form');
});

