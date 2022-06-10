const fs = require('fs');


let persona = {
    "name" : "Manuel Jesus",
    "surname" : "Piris Casero",
    "age" : "34"
};

let datos = JSON.stringify(persona);

    fs.writeFile("datos.json", datos , (error) =>{
        if(error)
             console.log(error);
        else{
            console.log("Datos Creados");  
        }
        })
    fs.readFile("datos.json","utf-8", (error) => {
        if(error)
            console.log(error);
        else{
            console.log(persona);
        }

});



