import logger from '../config/logger.js';
import ContainerFactory from '../database/DAOs/containerFactory.js';

class OrganicsService {
    constructor() {
        this.organicsDao = ContainerFactory.get('products', process.env.PERSISTENCY)
    }

    findOrganics = async () => {
        return await this.organicsDao.getByCategory('organic')
    }
}

const organicsService = new OrganicsService()

export default organicsService