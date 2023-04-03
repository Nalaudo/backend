import ContainerDAO from '#database/DAOs/containerFactory.js'
import { normalize, schema } from 'normalizr'
const products = ContainerDAO
const msgs = ContainerDAO

const socket = (io) => {
  io.on('connection', async (socket) => {
    const normalizr = async () => {
      const authorSchema = new schema.Entity('author')
      const textSchema = new schema.Entity('text')
      const chatSchema = new schema.Entity('chats', { author: authorSchema, text: textSchema })
      const getChats = await msgs.getAll()
      const normalizedChats = normalize(getChats, chatSchema)
      return normalizedChats
    }
    io.sockets.emit('arr-product', await products.getAll())
    io.sockets.emit('arr-chat', (await normalizr()).entities.chats.undefined)

    socket.on('data-productos', async (data) => {
      await products.save(data)
      io.sockets.emit('arr-product', await products.getAll())
    })
    socket.on('data-chat', async (data) => {
      await msgs.save(data)
      io.sockets.emit('arr-chat', (await normalizr()).entities.chats.undefined)
    })
  })
}

export default socket
