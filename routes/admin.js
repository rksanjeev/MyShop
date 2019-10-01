const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')

router.post('/add-product', productController.getAddproduct)

router.get('/add-product', productController.postAddProduct)

module.exports = router