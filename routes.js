const fakerProds = require('./src/mock/faker');
const Conatiner = require('./src/container');
const prods = new Conatiner("products");
const users = new Conatiner("users");

function getRoot(req, res) {
    const uname = req.session.user
    res.render('pages/socket.ejs', { uname: uname });
};

function getTest(req, res) {
    res.render('pages/prods-test.ejs', { fakerProds: fakerProds });
};

async function getProd(req, res) {
    try {
        const { id } = req.params;
        const prod = await prods.getById(id);
        res.json(prod);
    } catch (error) {
        res.json({ error: error });
    };
};

async function updProd(req, res) {
    try {
        const { id } = req.params;
        const { title, price, thumbnail } = req.body;
        await prods.updateById(id, title, price, thumbnail);
        res.json({ success: "producto modificado" });
    } catch (error) {
        res.json({ error: error });
    };
};

async function delProd(req, res) {
    try {
        const { id } = req.params;
        await prods.deleteById(id);
        res.json({ success: "Producto borrado" });
    } catch (error) {
        res.json({ error: error });
    };
};

async function delAll(req, res) {
    try {
        await prods.deleteAll();
        res.json({ success: "Todos los productos borrados" });
    } catch (error) {
        res.json({ error: error });
    };
};

function getLogin(req, res) {
    res.render('pages/login');
};

async function postLogin(req, res) {
    const { uname, psw } = req.body;
    if (uname != null && psw != null && uname != undefined && psw != undefined) {
        req.session.user = uname
        req.session.psw = psw
        res.redirect('/');
    } else {
        res.render('pages/login', { error: '' });
    }
};

function getRegister(req, res) {
    res.render('pages/register', { error: null });
};

async function postRegister(req, res) {
    const { uname, psw, pswRepeat } = req.body;
    if (psw === pswRepeat) {
        await users.save({ uname, psw })
        res.redirect('/login');
    } else {
        res.render('pages/register', { error: 'Las contraseñas no coinciden' });
    }
};

function getFaillogin(req, res) {
    res.render("login-error");
};

function getLogout(req, res) {
    const uname = req.session.user
    req.session.destroy((err) => {
        if (err) {
            res.send('No se pudo desloguear')
        } else {
            res.render('pages/logout', { uname: uname })
        }
    });
};

function failRoute(req, res) {
    res.status(404).render("pages/404");
};

module.exports = {
    getRoot,
    getTest,
    getProd,
    updProd,
    delProd,
    delAll,
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    getFaillogin,
    getLogout,
    failRoute,
};