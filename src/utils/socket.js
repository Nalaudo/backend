import ContainerFactory from '#database/DAOs/containerFactory.js'
import config from '#config/config.js'
const msgs = ContainerFactory.get('messages', config.persistence)

const socket = (io) => {
  io.on('connection', async (socket) => {
    io.sockets.emit('arr-chat', await msgs.getAll())

    socket.on('data-chat', async (data) => {
      await msgs.save(data)
      io.sockets.emit('arr-chat', await msgs.getAll())
    })
  })
}

export default socket
