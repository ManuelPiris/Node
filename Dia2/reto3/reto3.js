const fs = require("fs/promises");
const readline = require("readline");

let persona = {
    name : "Manuel Jesús",
    surname : "Piris Casero",
    age : 34
};
//LO PONGO IGUAL QUE ESTA PUESTO EN NODE DIA2
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

//THEN AND CATCH

    pregunta("¿Cual es tu nombre?: ")
    .then((nombre)=>{
        persona.name = nombre;
        return pregunta("¿Cual es tu apellido?: ")
    })
    .then((apellido)=>{
        persona.surname = apellido;
        return pregunta("¿Cual es tu edad?: ")
    })
    .then((edad)=>{
        persona.age = edad;
        return fs.writeFile("persona.json", JSON.stringify(persona))
    .then(()=>{
        return fs.readFile("persona.json");
    })
    .then(dato =>{
        console.log(JSON.parse(dato));
    })
    })
    .catch((error)=>{
        console.log(error);
    })


//ASYNC AWAIT

async function asyncAwait(){

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
asyncAwait();