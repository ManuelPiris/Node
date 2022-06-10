const fs = require("fs/promises");
const readline = require("readline");


async function writeAndRead2(){
    try{
        await fs.writeFile("persona.json", persona);
        let dato = await fs.readFile("persona.json", "utf8",);
        console.log(JSON.parse(dato));
    }catch (err){
        console.log(err);
    }
}
writeAndRead2();


module.exports = {writeAndRead2};