class ContainerMem {
  constructor (coll) {
    this.coll = coll
    this.products = []
    this.messages = []
    this.users = []
  }

  getAll () {
    if (this.coll === 'products') {
      return this.products
    } else if (this.coll === 'messages') {
      return this.messages
    } else if (this.coll === 'users') {
      return this.users
    }
  }

  save (item) {
    const id = (arr, item) => {
      const id = arr.length === 0 ? 1 : arr[arr.length - 1].id + 1
      item.id = id
      return item
    }
    if (this.coll === 'products') {
      const newProd = id(this.products, item)
      this.products.push(newProd)
      return newProd
    } else if (this.coll === 'messages') {
      return this.messages.push(id(this.messages, item))
    } else if (this.coll === 'users') {
      return this.users.push(id(this.users, item))
    }
  }

  getById (id) {
    if (this.coll === 'products') {
      return this.products.find(product => product.id === Number(id))
    } else if (this.coll === 'messages') {
      return this.messages.find(msg => msg.id === Number(id))
    }
  }

  getByCategory (category) {
    return this.products.find(product => product.category === category)
  }

  deleteById (id) {
    const filteredArray = this.products.filter(product => product.id !== Number(id))
    if (this.coll === 'products') {
      this.products = filteredArray
    } else if (this.coll === 'messages') {
      this.messages = filteredArray
    } else if (this.coll === 'users') {
      this.users = filteredArray
    }
  }

  deleteAll () {
    if (this.coll === 'products') {
      this.products = []
    } else if (this.coll === 'messages') {
      this.messages = []
    } else if (this.coll === 'users') {
      this.users = []
    }
  }

  updateById (id, title, description, features, thumbnail, category, price, stock) {
    const item = this.products.find((product) => product.id === Number(id))
    if (item) {
      item.title = title
      item.description = description
      item.features = features
      item.thumbnail = thumbnail
      item.category = category
      item.price = price
      item.stock = stock
      return this.products
    } else {
      return { error: 'Producto no encontrado' }
    }
  }
}

export default ContainerMem
