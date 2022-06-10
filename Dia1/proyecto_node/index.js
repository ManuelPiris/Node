let rc = require ("./readConsole");
let wr = require ("./writeAndReadObject");

rc.readConsole(function(persona){
    wr.writeAndRead("persona.json",persona);
})