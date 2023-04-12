import config from '#config/config.js'
import mongoose from 'mongoose'

let connection

const connectMG = async () => {
  if (!connection) {
    connection = await mongoose.connect(config.mongo_connection, { useNewUrlParser: true })
  }
  return connection
}

export default connectMG
