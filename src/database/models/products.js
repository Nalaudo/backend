import mongoose from 'mongoose'

const ProductuctSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true }
})

const Productucts = mongoose.model('products', ProductuctSchema)

export default Productucts
