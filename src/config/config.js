import dotenv from 'dotenv'

dotenv.config()

const devConfig = {
  node_env: process.env.NODE_ENV,
  port: 8080,
  persistence: process.env.PERSISTENCE,
  mongo_connection: 'mongodb+srv://Backend:Backend@backend.ep2dbvq.mongodb.net/dev',
  secret: process.env.SESSION_SECRET,
  nodemailer_pass: process.env.NODEMAILER_PASS,
  nodemailer_admin: 'biconalaudo@gmail.com'
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
