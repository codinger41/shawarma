const Product = require('../models/productModel');

exports.create = (req, res) => {
      // Create and Save a new product
      if(!req.params.name || !req.params.price) {
          res.status(400).send({message: "Price and Name can not be empty"});
      }
    const product = new Product({name: req.params.name , price: req.params.price});

    product.save((err, data) => {
        console.log(data);
     if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the product."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    // Retrieve and return all products from the database.
    Product.find((err, products) => {
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving products."});
        } else {
            res.send(products);
        }
    });
};

exports.findOne = (req, res) => {
    // Find a single product with a productId
    Product.findById(req.params.productId, (err, data) => {
        if(err) {
            res.status(500).send({message: "Could not retrieve product with id " + req.params.productId});
        } else {
            res.send(data);
        }
    });
};

exports.update = (req, res) => {
    // Update a product identified by the productId in the request
    Product.findById(req.params.productId, (err, product) => {
        if(err) {
            res.status(500).send({message: "Could not find a product with id " + req.params.productId});
        }

        product.name = req.params.name;
        product.price = req.params.price;

        product.save((err, data) => {
            if(err) {
                res.status(500).send({message: "Could not update product with id " + req.params.productId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a product with the specified productId in the request
    Product.remove({_id: req.params.productId}, (err, data) => {
        if(err) {
            res.status(500).send({message: "Could not delete product with id " + req.params.productId});
        } else {
            res.send({message: "product deleted successfully!"})
        }
    });
};

exports.postDailySales = (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if(err) {
            res.status(500).send({message: "Could not find a product with id " + req.params.productId});
        }

        product.dailySales = product.dailySales + 1;
        product.weeklySales = product.weeklySales + 1;

        product.save((err, data) => {
            if(err) {
                res.status(500).send({message: "Could not add sales to product with id " + req.params.productId});
            } else {
                res.send(data);
            }
        });
    });
}