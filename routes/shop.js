const express = require('express')
const path = require('path')
const router = express.Router()
const adminData = require('./admin')


router.get('/', (req, resp, next) => {  //This is a middleware. The next object is used to link multiple middlewares.   
    const products = adminData.products
    resp.render('shop', { products: products, docTitle: "My Shop", path: '/' }) //Comment this line to stop using PUG
});


module.exports = router