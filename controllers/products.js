const product = [];

exports.getAddproduct = (req, res) => {
    console.log(req.body)
    product.push({ title: req.body.title })
    res.redirect('/admin/add-product')
}

exports.postAddProduct = (req, res) => {
    // res.sendFile(path.join(path.dirname(process.mainModule.filename), 'views', 'add-product.html'))
    res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product' }) //Comment this line to stop using PUG
}

exports.getListOfProducs = (req, resp, next) => {  //This is a middleware. The next object is used to link multiple middlewares.   
    resp.render('shop', { products: product, docTitle: "My Shop", path: '/' }) //Comment this line to stop using PUG
}