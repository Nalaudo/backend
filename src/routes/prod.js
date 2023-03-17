import { Router } from 'express';
import prodsController from '../controllers/prod.js';
import logger from '../config/logger.js';

const routerProd = new Router();

routerProd.get('/', prodsController.getAllProdsController);
routerProd.get('/:id', prodsController.getProdController);
routerProd.put('/:id', prodsController.putProdController);
routerProd.delete('/:id', prodsController.deleteProdController);
routerProd.delete('/', prodsController.deleteAllProdsController);

export default routerProd;