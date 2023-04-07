import ContainerFactory from '#database/DAOs/containerFactory.js'
import { normalize, schema } from 'normalizr'
import config from '#config/config.js'
const products = ContainerFactory.get('products', config.persistence)
const msgs = ContainerFactory.get('messages', config.persistence)

const socket = (io) => {
  io.on('connection', async (socket) => {
    const normalizr = async () => {
      const authorSchema = new schema.Entity('authors')
      const messageSchema = new schema.Entity('messages', {
        author: authorSchema
      })
      const getChats = await msgs.getAll()
      const normalizedChats = normalize(getChats, [messageSchema])
      return normalizedChats
    }
    io.sockets.emit('arr-product', await products.getAll())
    io.sockets.emit('arr-chat', (await normalizr()))

    socket.on('data-productos', async (data) => {
      await products.save(data)
      io.sockets.emit('arr-product', await products.getAll())
    })
    socket.on('data-chat', async (data) => {
      await msgs.save(data)
      io.sockets.emit('arr-chat', (await normalizr()))
    })
  })
}

export default socket
