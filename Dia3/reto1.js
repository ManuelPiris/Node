const http = require("http");

//CREAMOS LA FUNCION Y LOS DATOS QUE NOS PIDEN QUE MOSTREMOS

const server = http.createServer(function(request,response){

        console.log("Petición recibida del cliente");
        console.log("Request URL:" + request.url);
        console.log("Request Method: " + request.method);
        console.log("Request Length: " + request.headers['content-length']);
        console.log("Request Agent: " + request.headers['user-agent']);
        response.writeHead(200,{"Content-Type":"text/plain"});
      
//CREO UNA CONDICIÓN PARA INDICARLE QUE SI PONGO UNA COSA IMPRIMA UN DATO,Y SI PONGO LA OTRA EL OTRO DATO

        if (request.url == "/bye"){
            let imprimir = {
            ok: true,
            message: 'Adios!'
        }
        response.write(JSON.stringify(imprimir));
        }else{
            let imprimir ={
            ok: true,
            message: 'Recibido!'
        }
        response.write(JSON.stringify(imprimir));
    }
    response.end();

//IMPRIMO EL FINAL DE LA FUNCION Y DESPUES LEE EL SERVIDOR
        
});
server.listen(3000);


//https://developers.triathlon.org/docs/responses-and-status-codes
//https://www.jolugama.com/blog/2019/01/05/node-http-express/