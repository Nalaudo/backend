const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')
const app = express();
const port = 8080;
const routes = require("./routes");
const { normalize, schema } = require('normalizr');
const connectMG = require('./src/utils/mongoConnect');
const Conatiner = require('./src/container');
const prods = new Conatiner("products");
const msgs = new Conatiner("messages");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

//MIDDLEWARES
const authMiddle = require('./src/middleware/auth')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
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
app.set('view engine', 'ejs');

httpServer.listen(process.env.PORT || port, () => {
    console.log(`Server: http://localhost:${port}`);
});

/*-------------------------*/
//SOCKET
/*-------------------------*/

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

app.get('/', authMiddle.auth, routes.getRoot);

app.get('/register', routes.getRegister);

app.post('/register', routes.postRegister);

app.get('/login', routes.getLogin);

app.post('/login', routes.postLogin);

app.get('/logout', routes.getLogout);

app.get('/api/productos-test', routes.getTest);

app.get('/get/:id', routes.getProd);

app.put('/update/:id', routes.updProd);

app.delete('/:id', routes.delProd);

app.delete('/', routes.delAll);

app.get('*', routes.failRoute);