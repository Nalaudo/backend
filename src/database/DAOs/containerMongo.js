import Productucts from '../models/products.js'
import Messages from '../models/messages.js'
import Users from '../models/users.js'

class ContainerMongo {
  constructor (coll) {
    this.coll = coll
  }

  async getAll () {
    if (this.coll === 'products') {
      return await Productucts.find({})
    } else if (this.coll === 'messages') {
      return await Messages.find({})
    } else if (this.coll === 'users') {
      return await Users.find({})
    }
  }

  async save (item) {
    if (this.coll === 'products') {
      const res = new Productucts(item)
      await res.save()
    } else if (this.coll === 'messages') {
      const res = new Messages(item)
      await res.save()
    } else if (this.coll === 'users') {
      const res = new Users(item)
      await res.save()
    }
  }

  async getById (id) {
    if (this.coll === 'products') {
      return await Productucts.findById(id)
    } else if (this.coll === 'messages') {
      return await Messages.findById(id)
    }
  }

  async getByTitle (title) {
    return await Productucts.findOne({ title }).exec()
  }

  async getByCategory (category) {
    return await Productucts.findOne({ category }).exec()
  }

  async getByEmail (email) {
    return await Users.findOne({ email }).exec()
  }

  async deleteById (id) {
    if (this.coll === 'products') {
      await Productucts.deleteOne({ _id: id })
    } else if (this.coll === 'messages') {
      await Messages.deleteOne({ _id: id })
    } else if (this.coll === 'users') {
      await Users.deleteOne({ _id: id })
    }
  }

  async deleteAll () {
    if (this.coll === 'products') {
      await Productucts.deleteMany({})
    } else if (this.coll === 'messages') {
      await Messages.deleteMany({})
    } else if (this.coll === 'users') {
      await Users.deleteMany({})
    }
  }

  async updateById (id, title, price, thumbnail) {
    await Productucts.findByIdAndUpdate(
      id,
      {
        title,
        price,
        thumbnail
      }
    )
  }
}

export default ContainerMongo
