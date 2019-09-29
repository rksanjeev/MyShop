// const http = require('http') redundant because app.listen() does it for us.
const express = require('express')
const bodyparser = require('body-parser')
const adminData = require('./routes/admin')
const shoproute = require('./routes/shop')
const path = require('path')

app = express();

app.set('view engine', 'pug') //set view engine to use pug 


app.use(bodyparser.urlencoded({ extended: false })); //register body parser in this middleare
//To serve static files that is stored in public directory
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)   //using express router object 

app.use(shoproute)

// Default route if page is not found
app.use((req, res) => {
    res.status(404).sendFile(path.join(path.dirname(process.mainModule.filename), 'views', '404.html'))
})

// const server = http.createServer(app);
// server.listen(8080);

app.listen(8080)