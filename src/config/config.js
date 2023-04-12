import dotenv from 'dotenv'

dotenv.config()

const devConfig = {
  node_env: process.env.NODE_ENV,
  port: 8080,
  persistence: process.env.PERSISTENCE,
  mongo_connection: process.env.MONGO_CONNECTION_DEV,
  secret: process.env.SESSION_SECRET,
  nodemailer_pass: process.env.NODEMAILER_PASS,
  nodemailer_admin: process.env.NODEMAILER_ADMIN
}

const prodConfig = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 8080,
  persistence: 'mongo',
  mongo_connection: process.env.MONGO_CONNECTION,
  secret: process.env.SESSION_SECRET,
  nodemailer_pass: process.env.NODEMAILER_PASS,
  nodemailer_admin: process.env.NODEMAILER_ADMIN
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

export default config
