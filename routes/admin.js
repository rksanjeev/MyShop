const express = require('express')
const path = require('path')
const router = express.Router()

const product = [];

router.post('/add-product', (req, res) => {
    product.push({ title: req.body.title })
    res.redirect('/admin/add-product')
})

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(path.dirname(process.mainModule.filename), 'views', 'add-product.html'))
})

exports.routes = router;
exports.products = product;