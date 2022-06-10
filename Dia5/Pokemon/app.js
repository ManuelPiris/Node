// Imports
const express = require('express')
const { type } = require('express/lib/response')
const app = express()
const port = 3000
var cons = require('consolidate');

// Static Files
app.use(express.static('front'))
app.use('/css', express.static(__dirname + 'front/css'))
app.use('/js', express.static(__dirname + 'front/js'))
app.use('/img', express.static(__dirname + 'front/img'))
// Set Views
app.engine('html', cons.swig)
app.set('views', './views')
app.set('view engine', 'html')

app.get('/', (req, res) =>{
    res.render("index")
})
// Listen on port 5500
app.listen(port)


