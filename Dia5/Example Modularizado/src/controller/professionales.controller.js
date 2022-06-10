//IMPORTO EL FICHERO PROFESSIONAL.JS
const {Professional} = require("../models/professional")
let professionalNuevo = null;
let arrayProfesionales = [];
//FUNCIONES
let id=0
function getStart(req, res){
    arrayProfesionales=[]
    id=0;
    res.render("index")
};

function getUserParamsId(req,res){
    let respuesta;
    let id = req.params.id;
    if(arrayProfesionales.length >= 1){
        arrayProfesionales.forEach(user => {
            if(user.id == id) {
                respuesta = user
                console.log(respuesta)
            }
        });
    }else if(id > arrayProfesionales.length) respuesta = { error:true, codigo:200, mensaje: "Profesional no existente" };
    else{
        respuesta = { error:true, codigo:200, mensaje: "Profesional no existente" };
    }
    res.json(respuesta);
}



function getProfesionales(req,res){
    let respuesta;
    if(arrayProfesionales.length > 0){
        respuesta=arrayProfesionales;
        }else{
            respuesta={error: true, codigo:200, mensaje: "No existe"};
        }
        console.log(arrayProfesionales)
        res.json(respuesta);      
};

function postUser(req,res){
    let respuesta;
    createId()
    professionalNuevo = null;
    if(professionalNuevo === null){
        professionalNuevo = new Professional (
                             req.body.name,
                             req.body.age,
                             req.body.genre,
                             req.body.weight,
                             req.body.height,
                             id
                             )
        arrayProfesionales.push(professionalNuevo)
        respuesta = {error: false, codigo: 200, mensaje: "Profesional creado",
                    resultado: professionalNuevo};
    }else
        respuesta = {error: true, codigo: 200, mensaje: "Profesional existente en base de datos",
                     resultado: null};
    console.log(professionalNuevo)
    res.send(respuesta);      
};
function createId() {
    id += 1
    return id
}
function putUser(req,res){
    let id = req.params.id;
    let respuesta;
    if(arrayProfesionales.length >= 1){
        arrayProfesionales.forEach(el =>{
            if(el.id ==id){
                el.name = req.body.name;
                el.age =  req.body.age;
                el.genre = req.body.genre;
                el.weight = req.body.weight;
                el.height = req.body.height
            }
        })
        console.log(arrayProfesionales)
        respuesta = {error: false, codigo: 200, mensaje: "Profesional actualizado",
                    resultado: arrayProfesionales};
    }else{
        respuesta = {error: true, codigo: 200, mensaje: "Profesional no existente",
                     resultado: arrayProfesionales};
    }
    
    res.json(respuesta);      
};

function deleteUser(req,res){
    let id = req.params.id;
    let respuesta
    if(arrayProfesionales.length >= 1){
        arrayProfesionales.forEach((element, index) => {
            if(element.id == id){
                arrayProfesionales.splice(index,1)
            }
        });
        respuesta = {error: false, codigo: 200, mensaje: "Profesional borrado"}; 
        console.log(arrayProfesionales)
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "Profesional no existente",
        resultado: professionalNuevo};  
    }
        res.json(respuesta);      
};

module.exports = {getStart,getProfesionales,postUser,putUser,deleteUser,getUserParamsId};