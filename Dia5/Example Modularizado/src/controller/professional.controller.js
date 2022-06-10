//IMPORTO EL FICHERO PROFESSIONAL.JS
const {Professional} = require("../models/professional")
let professionalNuevo = null;//("Leonardo", 45, "hombre", 70, 175, "rubio", "verde", "britanico", false, "britanico", 1, "actor");
//AL USAR HTML EXPRESS PONGO ABREVIADO REQ Y RES
//FUNCIONES
function getStart(req, res){
    let respuesta = {error:true, codigo:200, mensaje: "Punto de inicio"};
    res.render("index")
};

function getProfesional(req,res){
    let respuesta;
        if(professionalNuevo != null)
            respuesta=professionalNuevo;
        else
            respuesta={error: true, codigo:200, mensaje: "No existe"};
    res.send(respuesta);
};

function postUser(req,res){
    let respuesta;
    console.log(req.body)
    if(professionalNuevo === null){
        professionalNuevo = new Professional (
                             req.body.name,
                             req.body.age,
                             req.body.genre,
                             req.body.weight,
                             req.body.height,
                             )

        respuesta = {error: false, codigo: 200, mensaje: "Profesional creado",
                    resultado: professionalNuevo};
    }else
        
        respuesta = {error: true, codigo: 200, mensaje: "Profesional existente en base de datos",
                     resultado: null};
    
    res.send(respuesta);      
};

function putUser(req,res){
    let respuesta;
    if(professionalNuevo != null){
        professionalNuevo.nombre = req.body.name;
        professionalNuevo.edad =  req.body.age;
        professionalNuevo.genero = req.body.genre;
        professionalNuevo.peso = req.body.weight;
        professionalNuevo.altura = req.body.height
        respuesta = {error: false, codigo: 200, mensaje: "Profesional actualizado",
                    resultado: professionalNuevo};
    }else
        
        respuesta = {error: true, codigo: 200, mensaje: "Profesional no existente",
                     resultado: professionalNuevo};
    
    res.send(respuesta);      
};

function deleteUser(req,res){
    let respuesta
    if(professionalNuevo != null){
        professionalNuevo = null;
        respuesta = {error: false, codigo: 200, mensaje: "Profesional borrado",
        resultado: professionalNuevo};  
    }else
        respuesta = {error: true, codigo: 200, mensaje: "Profesional no existente",
        resultado: professionalNuevo};  

        res.send(respuesta);      
};

// function getUserParams(req,res){
//     let name = req.params.name
//     if(professionalNuevo != null && name === professionalNuevo.nombre)
//         res.send(professionalNuevo);
//     else
//         res.send({error: true, codigo: 200, mensaje: "Profesional no existente"});
// }




module.exports = {getStart,getProfesional,postUser,putUser,deleteUser};//getUserParams};