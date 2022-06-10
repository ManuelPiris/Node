const express = require("express");
const app  = express();

//CREAMOS LA FUNCION PERO AHORA CON HTML EXPRESS Y LOS DATOS QUE NOS PIDEN QUE MOSTREMOS

app.get("/",function (req,res){

    console.log("Petición recibida del cliente");
    console.log("Request URL:" + req.url);
    console.log("Request Method: " + req.method);
    console.log("Request Agent: " + req.headers['user-agent']);
    res.statusCode=200;
    res.json("{ok: true, message:'Recibido!'}");
});

//PARA PODER ACCEDER A LA URL BYE TENGO QUE CREAR OTRO APP,TAL Y COMO INDICA JOSE EN EL VIDEO

app.get("/bye",function (req,res){

    console.log("Petición recibida del cliente");
    console.log("Request URL:" + req.url);
    console.log("Request Method: " + req.method);
    console.log("Request Agent: " + req.headers['user-agent']);
    res.statusCode=200;
    res.json("{ok: true, message:'Adios!'}");
});

app.listen(3000);

//https://www.jolugama.com/blog/2019/01/05/node-http-express/
//https://flaviocopes.com/express-send-json-response/