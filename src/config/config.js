import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 8080
const PERSISTENCE = process.env.PERSISTENCE

export {
  PORT,
  PERSISTENCE
}
