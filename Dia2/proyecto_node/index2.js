let wr = require("./writeAndReadObject2")
let rc = require("./readConsole2");

// let persona = {
//     "name" : "",
//     "surname" : "",
//     "age" : 0
// };



async function lectura(){   
    try{ 
        let dato = await  rc.readConsole2()
        await  wr.writeAndRead2("persona.json",dato)
    }
    catch (error) {
        console.log(error)
    }

}
writeAndReadObject2.lectura()