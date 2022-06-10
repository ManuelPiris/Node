const fs = require("fs");
// const path = require('path');

function writeAndRead(path,objeto){

    fs.writeFile(path,JSON.stringify(objeto),(error)=>{
        if(error) throw error;
        console.log("Guardado");
    fs.readFile(path,(error,datos)=>{
        if(error) throw error;
        console.log(JSON.parse(datos));
    })

    });
}

module.exports ={writeAndRead};