exports.get404 = (req, res) => {
    // res.status(404).sendFile(path.join(path.dirname(process.mainModule.filename), 'views', '404.html'))
    res.render('404', { docTitle: 'Page not found' }) // Pug view render
}