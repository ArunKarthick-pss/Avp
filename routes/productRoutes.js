const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.addProduct);
router.put('/products/:id', productController.editProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/products/category/:category', productController.getProductsByCategory);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
