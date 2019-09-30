const express = require('express')
const path = require('path')
const router = express.Router()

const product = [];

router.post('/add-product', (req, res) => {
    console.log(req.body)
    product.push({ title: req.body.title })
    res.redirect('/admin/add-product')
})

router.get('/add-product', (req, res) => {
    // res.sendFile(path.join(path.dirname(process.mainModule.filename), 'views', 'add-product.html'))
    res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product' }) //Comment this line to stop using PUG
})

exports.routes = router;
exports.products = product;