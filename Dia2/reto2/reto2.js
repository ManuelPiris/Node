const fs =require("fs/promises");
const readline = require("readline");

let persona = {
    name : "Manuel Jesús",
    surname : "Piris Casero",
    age : 34
};

//ESTA TAL CUAL ESTA EN EL PDF DE NODE DIA2
//THEN AND CATCH

fs.writeFile("persona.json", JSON.stringify(persona))
.then(()=>{
    return fs.readFile("persona.json","utf-8");
})
.then(data =>{
    console.log(JSON.parse(data));
})
.catch(error =>{
    console.log(error);
})


//ESTA TAL CUAL ESTA EN EL PDF DE NODE DIA2
// ASYNC / AWAIT

async function asyncAwait(){

    try{
        await fs.writeFile("persona.json", JSON.stringify(persona));
            const nuevo = await fs.readFile("persona.json","utf-8");
            console.log(JSON.parse(nuevo));
    }catch(error){
        console.log(error);
 }
}
asyncAwait()