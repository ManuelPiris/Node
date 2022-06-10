//PONGO LA CLASE COMO EN EL DIA DE HOY HEMOS VISTO EN EL VIDEO
class Professional {
    constructor(name,age,genre,weight,height, id){
            this.name = name;
            this.age = age;
            this.genre = genre;
            this.weight = weight;
            this.height = height;
    }
}
let createUser = document.getElementById("create-user")
createUser.addEventListener("click", postUser)
function postUser()
{
    let profesional = new Professional (document.getElementById("name").value,
                                        document.getElementById("age").value,
                                        document.getElementById("genre").value,
                                        document.getElementById("weight").value,
                                        document.getElementById("height").value)
    const url = 'http://127.0.0.1:3000/profesionales';
    if(validar(profesional)){
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(profesional),
                method: "POST"
            }
        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
        if (result.error)
            showToast("ERROR: " + result.mensaje, "bg-danger")
        else
            showToast("Usuario Creado con Exito", "bg-success")
            console.log(result)
        })
        .catch(function(error)
        {
        console.log(error)
        })
    }
}

function validar(profesional)
{
    resultado = false
    if (profesional.name == "" || profesional.name == "null")
    {
        showToast("AVISO: Dato no introducido: name")
    }
    else if (profesional.age == "" || profesional.age == "null")
    {
        showToast(`AVISO: Dato no introducido: age`)
    }
    else if (profesional.genre == "" || profesional.genre == "null")
    {
        showToast("AVISO: Dato no introducido: genre")
    }
    else if (profesional.weight == "" || profesional.weight == "null")
    {
        showToast("AVISO: Dato no introducido: weight")
    }
    else if (profesional.height == "" || profesional.height == "null")
    {
        showToast("AVISO: Dato no introducido: height")
    }
    else
        resultado = true;
    return resultado;
};
function showToast(message)
{
    document.getElementById("toastText").innerText=message;
}; 

let fetchUserButton = document.getElementById("fetch-user")
let showProfesionalesCont = document.getElementById("show-users")
const getProfesionales = async () =>{
    while (showProfesionalesCont.firstChild) {
        showProfesionalesCont.firstChild.remove()
    }
    let id = document.getElementById("id").value
    if(id){
        let url=`http://127.0.0.1:3000/profesionales/${id}`
        try {
            rawResponse = await fetch(url)
            response = await rawResponse.json()
            if(response.name){
                console.log(response.name)
                let htmlProfesionales = `
                <table class="table table-dark ps-2 pe-2">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">nombre</th>
                    <th scope="col">edad</th>
                    <th scope="col">genero</th>
                    <th scope="col">peso</th>
                    <th scope="col">altura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="row">${response.id}</td>
                        <td>${response.name}</td>
                        <td>${response.age}</td>
                        <td>${response.genre}</td>
                        <td>${response.weight}</td>
                        <td>${response.height}</td>
                    </tr>
                </tbody>
              </table>
                `
                showProfesionalesCont.insertAdjacentHTML('afterbegin', htmlProfesionales)
            }
            showToast(response.mensaje || '')
        } catch (error) {
            console.log(error)
        }
    }else{
        let url=`http://127.0.0.1:3000/profesionales`
        try {
            rawResponse = await fetch(url)
            response = await rawResponse.json()
            let htmlProfesionales = `
            <table class="table table-dark" id="table">
                <thead class="">
                    <tr class="">
                    <th scope="col">#</th>
                    <th scope="col">nombre</th>
                    <th scope="col">edad</th>
                    <th scope="col">genero</th>
                    <th scope="col">peso</th>
                    <th scope="col">altura</th>
                    </tr>
                </thead>
            </table>
            `
            showProfesionalesCont.insertAdjacentHTML('afterbegin', htmlProfesionales)
            if(response){
                console.log("red")
                let table = document.getElementById("table")
            response.forEach(el =>{
                html = `
                <tbody>
                    <tr>
                        <th class="row">${el.id}</td>
                        <td>${el.name}</td>
                        <td>${el.age}</td>
                        <td>${el.genre}</td>
                        <td>${el.weight}</td>
                        <td>${el.height}</td>
                    </tr>
                </tbody>
            `
            table.insertAdjacentHTML('beforeend', html)
            })
            }
            showToast(response.mensaje || '')
        } catch (error) {
            console.log(error)
        }
    }
}

fetchUserButton.addEventListener("click", getProfesionales)


const updateUserBtn = document.getElementById("update")
updateUserBtn.addEventListener("click", putUser)

async function putUser() {
    let id = document.getElementById("id").value
    if(!id) return showToast("Necesitas un id para actualizar el usuario")
    let profesional = new Professional (document.getElementById("name").value,
                                        document.getElementById("age").value,
                                        document.getElementById("genre").value,
                                        document.getElementById("weight").value,
                                        document.getElementById("height").value)
                    
    const url = `http://127.0.0.1:3000/profesionales/${id}`;

    let param = 
        {
            headers: {"Content-type": "application/json; charset= UTF-8"},
            body: JSON.stringify(profesional),
            method: "PUT"
        }

    let raw = await fetch(url, param)
    let response = await raw.json()
    showToast(response.mensaje)
};

const deleteUserBtn = document.getElementById("delete")
deleteUserBtn.addEventListener("click", deleteUser)
async function deleteUser(){
    let id = document.getElementById("id").value;
    if(!id){
        return showToast("Error, no id found")
    }
    const url = `http://127.0.0.1:3000/profesionales/delete/${id}`;
    let raw = await fetch(url, {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({id:id}),
        method: "DELETE"
    })
    let message = await raw.json()
    showToast(message.mensaje + ' ' + id)
}


















//FUNCIONES DE LLAMADA
/*



function deleteUser(){
    let id = document.getElementById("id").value;
    const url = "http://localhost:3000/profesionales";
    if (id != ""){
        id= Number(id);

        let profesional = new Professional ("","","","","",)
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(profesional),
                method: "DELETE"
            }
    
        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
        if (result.error){
            showToast("ERROR: " + result.mensaje, "bg-danger")
        }   
        else{
            showToast("Usuario Creado con Exito", "bg-success")
        }    
        })
        .catch(function(error)
        {
            console.log(error)
        })
}}


//VISTO EN LA CLASE DE JOSE DE HOY



*/



