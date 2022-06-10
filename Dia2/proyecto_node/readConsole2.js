const { resolve } = require("path");
const readline = require("readline");


let persona = {
    "name" : "",
    "surname" : "",
    "age" : 0
};

function pregunta(pregunta){
   const question = new Promise((resolve,reject)=>{
   const rl = readline.createInterface({
       input : process.stdin,
       output : process.stdout
   });
   rl.question(pregunta, (respuesta)=>{
       resolve(respuesta);
       rl.close();
   });
   });

   return question;
}


//ASYNC AWAIT
async function readConsole2() {
    try{
        let name = await pregunta("¿Cual es tu nombre?: ");
        persona.name = name;
        let surname = await pregunta("¿Cual es tu apellido?: ");
        persona.surname = surname;
        let age = await pregunta("¿Cual es tu edad?: ");
        persona.age = age;
            let datos= JSON.stringify(persona);
        await fs.writeFile("persona.json", datos);
        await fs.readFile("persona.json","utf-8");
    }catch(error){
        console.log(error);
    }   
}

module.exports = {readConsole2}