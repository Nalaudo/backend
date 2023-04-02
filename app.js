import express from 'express'
import http from 'http'
import { Server as IoServer } from 'socket.io'
import { PORT } from '#config/config.js'
import passportConfig from '#config/passport.js'
import expressRoutes from '#routes/routes.js'
import expressMiddlewares from '#utils/expressMiddlewares.js'
import connectMG from '#utils/mongoConnect.js'
import socket from '#utils/socket.js'

class ExpressServer {
  constructor () {
    this.app = express()
    this.server = http.createServer(this.app)
    this.ioServer = new IoServer(this.server)
  }

  middlewares = () => {
    expressMiddlewares(this.app, express)
  }

  database = () => {
    connectMG()
  }

  passport = () => {
    passportConfig()
  }

  socket = () => {
    socket(this.ioServer)
  }

  routes = () => {
    expressRoutes(this.app)
  }

  listen = () => {
    this.middlewares()
    this.database()
    this.passport()
    this.socket()
    this.routes()
    this.server.listen(PORT)
  }
}

const expressServer = new ExpressServer()

export default expressServer
