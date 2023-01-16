const fakerProds = require('./src/mock/faker');
const Conatiner = require('./src/container');
const prods = new Conatiner("products");


function getRoot(req, res) {
    const email = req.user?.email
    res.render('pages/socket.ejs', { email: email });
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
    const email = req.user?.email;
    if (req.isAuthenticated()) {
        res.redirect('/profile');
    } else {
        res.render('pages/login', { email });
    }
};

function postLogin(req, res) {
    res.redirect('/profile')
};

function getSignup(req, res) {
    const email = req.user?.email;
    if (req.isAuthenticated()) {
        res.redirect('/profile');
    } else {
        res.render('pages/signup', { email });
    }
};

function postSignup(req, res) {
    res.redirect('/profile');
};

function getLogout(req, res) {
    const email = req.user?.email;
    req.logout(function (err) {
        if (err) console.log(err);
        else res.render('pages/logout', { email });
    });
};

function getProfile(req, res) {
    const email = req.user?.email;
    res.render('pages/profile', { email })
};

function getFailLogin(req, res) {
    res.render("pages/fail-login");
};

function getFailSignup(req, res) {
    res.render("pages/fail-signup");
};

function failRoute(req, res) {
    const email = req.user?.email;
    res.status(404).render("pages/404", { email });
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
    getSignup,
    postSignup,
    getFailLogin,
    getFailSignup,
    getLogout,
    getProfile,
    failRoute,
};