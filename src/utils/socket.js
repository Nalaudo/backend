import ContainerFactory from '../database/DAOs/containerFactory.js';
import { normalize, schema } from 'normalizr';
import logger from '../config/logger.js';
const prods = ContainerFactory.get('products', process.env.PERSISTENCY);
const msgs = ContainerFactory.get('messages', process.env.PERSISTENCY);

const socket = (io) => {
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
};

export default socket;