//IMPORTO EL FICHERO PROFESSIONAL.JS
const {Professional} = require("../models/professional")
let professionalNuevo = null;
let arrayProfesionales = [];

//FUNCIONES

function getStart(req, res){
    let respuesta = {error:true, codigo:200, mensaje: "Punto de inicio"};
    res.send(respuesta);
};

function getUserParamsId(req,res){
    let respuesta;
    let id = req.params.id;
    if(arrayProfesionales.length > 0) {
        for (let i=0; i<arrayProfesionales.length; i++) {
            if (i + 1 == id) {
                respuesta=arrayProfesionales[i];
            }}
    }else{
        respuesta = { error:true, codigo:200, mensaje: "Profesional no existente" };
    }
    res.send(respuesta);
}



function getProfesionales(req,res){
    let respuesta;
    if(arrayProfesionales.length >= 0){
        respuesta=arrayProfesionales;
        }else{
            respuesta={error: true, codigo:200, mensaje: "No existe"};
        }
        res.send(respuesta);      
};

function postUser(req,res){
    let respuesta;
    professionalNuevo = null;
    console.log(req.body)
    if(professionalNuevo === null){
        professionalNuevo = new Professional (
                             req.body.name,
                             req.body.age,
                             req.body.genre,
                             req.body.weight,
                             req.body.height,
                             )
            arrayProfesionales.push(professionalNuevo)

        respuesta = {error: false, codigo: 200, mensaje: "Profesional creado",
                    resultado: professionalNuevo};
    }else
        
        respuesta = {error: true, codigo: 200, mensaje: "Profesional existente en base de datos",
                     resultado: null};
    
    res.send(respuesta);      
};

function putUser(req,res){
    let respuesta;
    let id = req.query.id;
    if(professionalNuevo !=null){
        arrayProfesionales[id].name = req.body.name;
        arrayProfesionales[id].age =  req.body.age;
        arrayProfesionales[id].genre = req.body.genre;
        arrayProfesionales[id].weight = req.body.weight;
        arrayProfesionales[id].height = req.body.height
        respuesta = {error: false, codigo: 200, mensaje: "Profesionales actualizado",
                    resultado: arrayProfesionales[id]};
    }else
        
        respuesta = {error: true, codigo: 200, mensaje: "Profesionales no existentes",
                     resultado: null};
    
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

module.exports = {getStart,getProfesionales,postUser,putUser,deleteUser,getUserParamsId};