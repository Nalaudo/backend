/* eslint-disable no-undef */
import { faker } from '@faker-js/faker'
import { expect } from 'chai'
import supertest from 'supertest'

const request = supertest('http://localhost:8080')

describe('Test all products endpoints.', () => {
  const generateProduct = () => {
    const categories = ['organic', 'inorganic', 'electronic']
    const categoryPicker = categories[Math.floor(Math.random() * categories.length)]
    const object = { title: faker.commerce.product(), price: Number(faker.commerce.price(1, 1000, 0)), thumbnail: faker.image.abstract(), category: categoryPicker }
    return object
  }

  const post = generateProduct()

  describe('POST ONE', () => {
    it('Should add product', async () => {
      const res = await request.post('/api/products').send(post)
      expect(res.status).to.eql(200)
      expect(res.body).to.be.a('object')
      expect(res.body).to.include.keys('title', 'price', 'thumbnail', 'category', '_id', '__v')
      post._id = res.body._id
      expect(post.title).to.eql(res.body.title)
      expect(post.price).to.eql(res.body.price)
      expect(post.thumbnail).to.eql(res.body.thumbnail)
      expect(post.category).to.eql(res.body.category)
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
