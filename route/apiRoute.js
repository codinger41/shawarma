import express from 'express';
import  * as ProductController from '../controller/productController';
const products = new ProductController.default();

const apiRouter = express.Router();

    // post a product
    apiRouter.post('/products', products.create);

    // get all products
    apiRouter.get('/products', products.findAll);

    // get single product
    apiRouter.get('/products/:productId', products.findOne);

    // update product
    apiRouter.put('/products/:productId', products.update);

    // delete a product
    apiRouter.delete('/products/:productId', products.delete);

    // post daily, weekly daily sales for a product
    apiRouter.put('/products/:productId', products.postDailySales);

export default apiRouter;