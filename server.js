//SERVER
const express = require('express');
const session = require('express-session');
const app = express();
const port = 8080;
const httpServer = require("http").createServer(app);
httpServer.listen(process.env.PORT || port, () => {
    console.log(`Server: http://localhost:${port}`);
});
const routes = require("./routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//DB
const MongoStore = require('connect-mongo');
require('./src/utils/mongoConnect');
const Conatiner = require('./src/container');
const prods = new Conatiner("products");
const msgs = new Conatiner("messages");
app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://Backend:Backend@backend.ep2dbvq.mongodb.net/ecommerce",
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    }),
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000 //10 mins
    }
})
);

//PASSPORT
const passport = require('passport');
require('./src/config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//MIDDLEWARES
const authMiddle = require('./src/middleware/auth');
const passportAuth = require('./src/middleware/passportAuth');

/*-------------------------*/
//SOCKET
/*-------------------------*/
const io = require("socket.io")(httpServer);
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
        }
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
        console.log(error);
    }
});

/*-------------------------*/
//ROUTES
/*-------------------------*/

app.get('/', routes.getRoot);

app.get('/signup', routes.getSignup);

app.post('/signup', passportAuth.signupAuth(passport), routes.postSignup);

app.get('/failSignup', routes.getFailSignup);

app.get('/login', routes.getLogin);

app.post('/login', passportAuth.loginAuth(passport), routes.postLogin);

app.get('/failLogin', routes.getFailLogin);

app.get('/logout', authMiddle.auth, routes.getLogout);

app.get('/profile', authMiddle.auth, routes.getProfile);

app.get('/api/productos-test', authMiddle.auth, routes.getTest);

app.get('/get/:id', routes.getProd);

app.put('/update/:id', routes.updProd);

app.delete('/:id', routes.delProd);

app.delete('/', routes.delAll);

app.get('*', routes.failRoute);