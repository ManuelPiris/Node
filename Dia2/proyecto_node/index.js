let wr = require("./writeAndReadObject")
let rc = require("./readConsole");

rc.readConsole()
.then((objeto)=>{
    return wr.writeAndRead(objeto)
})
.then((datos)=>{
    console.log(datos);
})
.catch((error)=>{
    console.log(error)
})



