module.exports = (app) => {
    const products = require('../controllers/productController.js');
    // add new product
    app.post('/products', products.create);

    // get all products
    app.get('/products', products.findAll);

    // get single product
    app.get('/products/:productId', products.findOne);

    // update product
    app.put('/products/:productId', products.update);

    // delete a product
    app.delete('/products/:productId', products.delete);

     // post daily, weekly daily sales for a product
    app.put('/products/:productId', products.postDailySales);
};