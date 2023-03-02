/*-------------------------*/
//SERVER
/*-------------------------*/
const logger = require('./src/config/logger');
const config = require('./src/config/config');
const express = require('express');
const session = require('express-session');
const compression = require('compression');
const app = express();
const server = require("http").createServer(app);

server.listen(config.PORT, () => {
    console.log(`Server: http://localhost:${config.PORT}`);
});

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

/*-------------------------*/
//DB
/*-------------------------*/
const MongoStore = require('connect-mongo');
require('./src/utils/mongoConnect');
app.use(session({
    store: MongoStore.create({
        mongoUrl: config.MONGO_CONNECTION,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    }),
    secret: config.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000 //10 mins
    }
})
);

/*-------------------------*/
//PASSPORT
/*-------------------------*/
const passport = require('passport');
require('./src/config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

/*-------------------------*/
//SOCKET
/*-------------------------*/
const io = require("socket.io")(server);
const { prods, msgs } = require('./database/container');
const { normalize, schema } = require('normalizr');

io.on("connection", async (socket) => {
    try {
        const normalizr = async () => {
            const authorSchema = new schema.Entity('author');
            const textSchema = new schema.Entity('text');
            const chatSchema = new schema.Entity('chats', { author: authorSchema, text: textSchema });
            const getChats = await msgs.getAll();
            const normalizedChats = normalize(getChats, chatSchema);
            return normalizedChats;
        };
        io.sockets.emit("arr-producto", await prods.getAll());
        io.sockets.emit("arr-chat", (await normalizr()).entities.chats.undefined);

        socket.on("data-productos", async (data) => {
            await prods.save(data);
            io.sockets.emit("arr-producto", await prods.getAll());
        });
        socket.on("data-chat", async (data) => {
            await msgs.save(data);
            io.sockets.emit("arr-chat", (await normalizr()).entities.chats.undefined);
        });
    } catch (error) {
        logger.error(error);
    };
});

/*-------------------------*/
//ROUTES
/*-------------------------*/
const routerCart = require('./routes/cart');
const routerCheckout = require('./routes/checkout');
const routerInfo = require('./routes/info');
const routerInorganics = require('./routes/inorganics');
const routerLogin = require('./routes/login');
const routerLogout = require('./routes/logout');
const routerNotFound = require('./routes/notFound');
const routerOrganics = require('./routes/organics');
const routerProd = require('./routes/prod');
const routerProfile = require('./routes/profile');
const routerRandoms = require('./routes/randoms');
const routerRoot = require('./routes/root');
const routerSignup = require('./routes/signup');
const routerTest = require('./routes/test');

app.use('/cart', routerCart)
app.use('/checkout', routerCheckout)
app.use('/info', routerInfo)
app.use('/inorganics', routerInorganics)
app.use('/login', routerLogin)
app.use('/logout', routerLogout)
app.use('/organics', routerOrganics)
app.use('/prod', routerProd)
app.use('/profile', routerProfile)
app.use('/api/randoms', routerRandoms)
app.use('/', routerRoot)
app.use('/signup', routerSignup)
app.use('/api/productosTest', routerTest)

app.use('*', routerNotFound)