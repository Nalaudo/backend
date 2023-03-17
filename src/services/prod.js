import ContainerFactory from '../database/DAOs/containerFactory.js';
import logger from '../config/logger.js';

class ProdsService {
    constructor() {
        this.prodsDao = ContainerFactory.get('products', process.env.PERSISTENCY)
    }

    getAllProds = async () => {
        return await this.prodsDao.getAll()
    }
    getProd = async (id) => {
        return await this.prodsDao.getById(id);
    }
    putProd = async (id) => {
        return await this.prodsDao.getById(id);
    }
    deleteProd = async (id) => {
        return await this.prodsDao.deleteById(id);
    }
    deleteAllProds = async () => {
        return await this.prodsDao.deleteAll();
    }
}
const prodsService = new ProdsService()


export default prodsService