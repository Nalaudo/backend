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
      return this.products.push(id(this.products, item))
    } else if (this.coll === 'messages') {
      return this.messages.push(id(this.messages, item))
    } else if (this.coll === 'users') {
      return this.users.push(id(this.users, item))
    }
  }

  getById (id) {
    if (this.coll === 'products') {
      return this.products.find(({ product }) => product.id === id)
    } else if (this.coll === 'messages') {
      return this.messages.find(({ msg }) => msg.id === id)
    }
  }

  getByTitle (title) {
    return this.products.find(({ product }) => product.title === title)
  }

  getByCategory (category) {
    return this.products.find(({ product }) => product.category === category)
  }

  getByEmail (email) {
    return this.users.find(({ user }) => user.email === email)
  }

  deleteById (id) {
    try {
      const filtered = async () => {
        const arr = this.getAll()
        return arr.filter((e) => e.id !== id)
      }
      if (this.coll === 'products') {
        this.products.push(filtered())
      } else if (this.coll === 'messages') {
        this.messages.push(filtered())
      } else if (this.coll === 'users') {
        this.users.push(filtered())
      }
    } catch (e) {
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

  updateById (id, title, price, thumbnail) {
    const products = this.getAll()
    const item = products.find((product) => product.id === id)
    if (item) {
      item.title = title
      item.price = price
      item.thumbnail = thumbnail
      this.products.push(item)
    } else {
      return { error: 'Productucto no encontrado' }
    }
  }
}

export default ContainerMem
