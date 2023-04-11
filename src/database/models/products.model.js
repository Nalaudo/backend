import mongoose from 'mongoose'

const ProductuctSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  description: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: false }
})

const Productucts = mongoose.model('products', ProductuctSchema)

export default Productucts
