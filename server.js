const express = require('express')
const app = express();
const port = 8080;

const mongoose = require('mongoose')
const Products = require('./src/container')
const prods = new Products("products");
const Messages = require('./src/container')
const msgs = new Messages("messages");

const fakerProds = require('./src/mock/faker')
const { normalize, schema } = require('normalizr');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

httpServer.listen(process.env.PORT || port, () => {
    console.log(`Server: http://localhost:${port}`);
});

const connectMG = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/socket', { useNewUrlParser: true })
    } catch (error) {
        console.log(error)
        throw 'connectMG failed'
    }
}

const db = connectMG();

io.on("connection", async (socket) => {
    try {
        const normalizr = async () => {
            const authorSchema = new schema.Entity('author');
            const textSchema = new schema.Entity('text');
            const chatSchema = new schema.Entity('chats', { author: authorSchema, text: textSchema });
            const getChats = await msgs.getAll()
            console.log(JSON.stringify(getChats).length);
            const normalizedChats = normalize(getChats, chatSchema);
            console.log(JSON.stringify(normalizedChats.entities.chats.undefined).length);
            return normalizedChats
        }
        io.sockets.emit("arr-producto", await prods.getAll());
        io.sockets.emit("arr-chat", (await normalizr()).entities.chats.undefined);

        socket.on("data-productos", async (data) => {
            await prods.save(data)
            io.sockets.emit("arr-producto", await prods.getAll());
        });
        socket.on("data-chat", async (data) => {
            await msgs.save(data);
            io.sockets.emit("arr-chat", (await normalizr()).entities.chats.undefined);
        });
    } catch (error) {
        console.log(error)
    }

});


app.get('/', (req, res) => {
    res.render('pages/socket.ejs');
});

app.get('/api/productos-test', (req, res) => {
    res.render('pages/prods-test.ejs', { fakerProds: fakerProds });
});

app.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params
        const prod = await prods.getById(id)
        res.json(prod);
    } catch (error) {
        res.json({ error: error });
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { title, price, thumbnail } = req.body;
        await prods.updateById(id, title, price, thumbnail)
        res.json({ success: "producto modificado" });
    } catch (error) {
        res.json({ error: error });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await prods.deleteById(id)
        res.json({ success: "Producto borrado" });
    } catch (error) {
        res.json({ error: error });
    }
});

app.delete('/', async (req, res) => {
    try {
        await prods.deleteAll()
        res.json({ success: "Todos los productos borrados" });
    } catch (error) {
        res.json({ error: error });
    }
});