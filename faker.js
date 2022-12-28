const faker = require('faker');

let products = []

for (let i = 0; i < 5; i++) {
    products.push({ title: faker.name.product(), price: faker.commerce.price(), thumbanil: faker.internet.email() })
}

module.exports = products