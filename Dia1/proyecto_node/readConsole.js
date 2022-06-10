const rl = require ("readline");
const {stdin,stdout} = require("process");

function readConsole(callback){

let persona = {
    name : "",
    surname: "",
    age : 0
};

let nombre = rl.createInterface(stdin,stdout);

nombre.question("¿Cual es tu nombre?: " , (dato)=>{
    persona.name = dato;
nombre.question("¿Cual es tu apellido?: " , (dato)=>{
    persona.surname = dato;
nombre.question("¿Cual es tu edad?: " , (dato)=>{
    persona.age = dato;
    nombre.close();
    callback(persona);
    });
 })});
}

module.exports = {readConsole};