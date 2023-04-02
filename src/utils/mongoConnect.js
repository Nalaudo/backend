import mongoose from 'mongoose'

let connection

const connectMG = async () => {
  if (!connection) {
    connection = await mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
  }
  return connection
}

export default connectMG
