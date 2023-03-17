import { faker } from '@faker-js/faker'
import logger from '../config/logger.js';

class TestService {
    fakerMocks = () => {
        let products = [];
        for (let i = 0; i < 5; i++) {
            products.push({ title: faker.commerce.product(), price: faker.commerce.price(), thumbnail: faker.image.image() });
        }
        return products;
    };
}

const testService = new TestService()

export default testService