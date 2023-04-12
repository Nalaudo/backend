import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  from: {
    id: { type: String, required: true },
    email: { type: String, required: true }
  },
  text: { type: String, required: true }
}, { timestamps: true })

const Messages = mongoose.model('Messages', MessageSchema)

export default Messages
