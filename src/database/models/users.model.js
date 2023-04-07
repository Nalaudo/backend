import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String, required: true },
  avatar: { type: Object, required: false },
  cart: { type: Array, required: false }
})

const Users = mongoose.model('users', UserSchema)

export default Users
