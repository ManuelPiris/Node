const express = require("express")
const cors = require("cors")
const userRouters = require("./src/routers/professional.routers")
const userRoutersPro = require("./src/routers/professionales.routers")
const errorHandling = require("./src/error/errorHandling")
const app = express();
var cons = require('consolidate');

app.use(express.static('front'))
app.engine('html', cons.swig)
app.use('/css', express.static(__dirname + 'front/css'))
app.use('/js', express.static(__dirname + 'front/js'))
app.use('/images', express.static(__dirname + 'front/img'))
app.set('views', './front/views')
app.set('view engine', 'html')
app.listen(process.env.PORT || 3000)
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(userRouters);
app.use(userRoutersPro);
app.use(function(req,res,next){
    res.status(404).json({error:true,
                          codigo:404,
                          mensaje:"Endpoint doesnt found"})
                       
})

app.use(errorHandling);

module.exports = app;