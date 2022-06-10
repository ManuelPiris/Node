const fs = require("fs/promises");
const readline = require("readline");

function writeAndRead(objeto){
    let escribir = new Promise((resolve,reject)=>{
        fs.writeFile("persona.json", JSON.stringify(objeto))
        .then(()=>{
            return fs.readFile("persona.json","utf-8");
        })
        .then((dato) =>{
            resolve(JSON.parse(dato));
        })
        .catch(error =>{
            reject(error);
        })
    })
    return escribir;
}

// async function asyncAwait(){
//     try{
//         await fs.writeFile("persona.json", escribir);
//         let dato = await fs.readFile("persona.json", "utf8",);
//         console.log(JSON.parse(dato));
//     }catch (err){
//         console.log(err);
//     }
// }
// asyncAwait();

module.exports = {writeAndRead};