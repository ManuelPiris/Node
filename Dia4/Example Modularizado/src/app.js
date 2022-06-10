const express = require("express")
const cors = require("cors")
const userRouters = require("./routers/professional.routers")
const userRoutersPro = require("./routers/professionales.routers")
const errorHandling = require("./error/errorHandling")

const app = express();

app.set("port",process.env.PORT || 3000)
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