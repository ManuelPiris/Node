const fs = require ("fs");
const {stdin,stdout} = require("process");
const rl = require ("readline");

let persona = {
    "name" : "",
    "surname" : "",
    "age" : 0
};

let nombre = rl.createInterface(stdin,stdout);

nombre.question("¿Cual es tu nombre?: " , (dato)=>{
    persona.name = dato;
nombre.question("¿Cual es tu apellido?: " , (dato)=>{
    persona.surname = dato;
nombre.question("¿Cual es tu edad?: " , (dato)=>{
    persona.age = dato;
    nombre.close();

    fs.writeFile("datos.json",JSON.stringify(persona),()=>{
        fs.readFile("datos.json","utf8", (error,datos)=>{
            if(error) throw error;
            console.log(JSON.parse(datos));
        });
    });
})})});
