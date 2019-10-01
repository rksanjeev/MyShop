// const http = require('http') redundant because app.listen() does it for us.
const express = require('express')
const bodyparser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shoproute = require('./routes/shop')
const path = require('path')

const errorControler = require('./controllers/error')

app = express();


// Uncomment below lines to stop using Pug rendering engine 
app.set('view engine', 'pug') //set view engine to use pug 
app.set('views', path.join(__dirname, 'views', 'pug'))


// Uncomment below lines to use EJS rendering engine
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views', 'ejs'))


app.use(bodyparser.urlencoded({ extended: false })); //register body parser in this middleare
//To serve static files that is stored in public directory
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)   //using express router object 

app.use(shoproute)

// Default route if page is not found
app.use(errorControler.get404)

// const server = http.createServer(app);
// server.listen(8080);

app.listen(8080)