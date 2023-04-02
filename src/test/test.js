/* eslint-disable no-undef */
import supertest from 'supertest'
import { expect } from 'chai'
// import { faker } from '@faker-js/faker'

const request = supertest('http://localhost:8080')

// const generateProduct = () => {
//   const category = 'organic' || 'inorganic'
//   return { title: faker.commerce.product(), price: faker.commerce.price(), thumbnail: faker.image.abstract(), category }
// }

describe('test all endpoint', () => {
  describe('GET ALL', () => {
    it('deberia responder con status 200 y ser array', async () => {
      const res = await request.get('/products')
      expect(res.status).to.eql(200)
      expect(res.body).to.be.a('array')
    })
  })
  describe('GET ONE', () => {
    it('deberia responder con status 200 y ser objeto', async () => {
      const res = await request.get('/products/6413eac96d9948444e8f7748')
      expect(res.status).to.eql(200)
      expect(res.body).to.be.a('object')
    })
  })
  // POST SOLO CON SOCKET
  // describe('POST ONE', () => {
  //     it('deberia incorporar un producto', async () => {
  //         const post = generateProduct()
  //         const res = await request.post('/products').send(post)
  //         expect(res.status).to.eql(201)
  //         expect(res.body).to.be.a('object')
  //         expect(res.body).to.include.keys('title', 'price', 'thumbnail', 'category', '_id')
  //         expect(post.title).to.eql(res.body.title)
  //         expect(post.price).to.eql(res.body.price)
  //         expect(post.thumbnail).to.eql(res.body.thumbnail)
  //         expect(post.category).to.eql(res.body.category)
  //     })
  // })
  describe('DEL ONE', function () {
    it('should respond 200', async () => {
      const res = await request.del('/products/6413eac96d9948444e8f7748')
      expect(res.status).to.eql(200)
    })
  })
  // DELETE ALL no probados para no perder los productos, pero debería funcionar como el de arriba
  // describe('DEL ALL', function () {
  //     it('should respond 200', async () => {
  //         const res = await request.del('/products')
  //         expect(res.status).to.eql(200)
  //     })
  // })
})
