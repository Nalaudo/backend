import logger from '../config/logger.js';
import ContainerFactory from '../database/DAOs/containerFactory.js';

class InorganicsService {
    constructor() {
        this.inorganicsDao = ContainerFactory.get('products', process.env.PERSISTENCY)
    }

    findInorganics = async () => {
        return await this.inorganicsDao.getByCategory('inorganic')
    }
}

const inorganicsService = new InorganicsService()

export default inorganicsService