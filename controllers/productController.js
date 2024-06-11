const Product = require('../models/productModel');

// Add a new product
const addProduct = async (req, res) => {
    
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).send(savedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Edit existing product
const editProduct = async (req, res) => {
    try {
        req.body.modified=new Date(Date.now())
        const updatedProduct = await Product.findOneAndUpdate({id:req.params.id}, req.body, { new: true });
        res.send(updatedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Retrieve all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({id:-1}).skip((req.query.page-1)*15).limit(15)
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Retrieve product by id
const getProductById = async (req, res) => {
    try {
        console.log('req.params',req.params)
        const product = await Product.findOne({id:req.params.id});
        if (product) {
            res.send(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Retrieve products by category
const getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Remove product
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({id:req.params.id});
        if (deletedProduct) {
            res.send('Product deleted');
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
    addProduct,
    editProduct,
    getAllProducts,
    getProductById,
    getProductsByCategory,
    deleteProduct
};
