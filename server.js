const express = require('express');
const app = express();
const port = 8080;
const Contenedor = require('./contenedor');
const contenedor = new Contenedor();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

httpServer.listen(process.env.PORT || port, () => {
    console.log(`Server: http://localhost:${port}`);
});

let productos = contenedor.syncGetAll();
let chat = contenedor.syncGetChat();

io.on("connection", (socket) => {
    io.sockets.emit("arr-producto", productos);
    io.sockets.emit("arr-chat", chat);

    socket.on("data-productos", (data) => {
        contenedor.save(data);
        io.sockets.emit("arr-producto", productos);
    });
    socket.on("data-chat", (data) => {
        contenedor.saveChat(data);
        io.sockets.emit("arr-chat", chat);
    });
});

app.get('/', (req, res) => {
    res.render('pages/socket.ejs');
});