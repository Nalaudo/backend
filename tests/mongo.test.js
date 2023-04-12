/* eslint-disable no-undef */
import { faker } from '@faker-js/faker'
import { expect } from 'chai'
import supertest from 'supertest'

const request = supertest('http://localhost:8080')

describe('Test all products endpoints.', () => {
  const generateProduct = () => {
    const categories = ['organics', 'inorganics']
    const categoryPicker = categories[Math.floor(Math.random() * categories.length)]
    const object = { title: faker.commerce.product(), description: faker.lorem.paragraph(), category: categoryPicker, thumbnail: faker.image.abstract(), price: Number(faker.commerce.price(1, 1000, 0)) }
    return object
  }

  const post = generateProduct()

  describe('POST ONE', () => {
    it('Should add product', async () => {
      const res = await request.post('/api/products').send(post)
      expect(res.status).to.eql(200)
      expect(res.body).to.be.a('object')
      expect(res.body).to.include.keys('title', 'description', 'thumbnail', 'category', 'price', '_id')
      post._id = res.body._id
      expect(post.title).to.eql(res.body.title)
      expect(post.description).to.eql(res.body.description)
      expect(post.features).to.eql(res.body.features)
      expect(post.category).to.eql(res.body.category)
      expect(post.thumbnail).to.eql(res.body.thumbnail)
      expect(post.price).to.eql(res.body.price)
      expect(post.stock).to.eql(res.body.stock)
    })
  })
  describe('GET ALL', () => {
    it('Should res 200 and be an array', async () => {
      const res = await request.get('/api/products')
      expect(res.status).to.eql(200)
      expect(res.body).to.be.a('array')
    })
  })
  describe('GET ONE', () => {
    it('Should res 200 and be an object', async () => {
      const res = await request.get(`/api/products/${post._id}`)
      expect(res.status).to.eql(200)
      expect(res.body).to.be.a('object')
    })
  })
  describe('DEL ONE', function () {
    it('Should res 200', async () => {
      const res = await request.del(`/api/products/${post._id}`)
      expect(res.status).to.eql(200)
    })
  })
  describe('DEL ALL', function () {
    it('Should res 200', async () => {
      const res = await request.del('/api/products')
      expect(res.status).to.eql(200)
    })
  })
})
