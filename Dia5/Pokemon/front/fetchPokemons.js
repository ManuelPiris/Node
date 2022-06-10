const fetchPokemonButton = document.getElementById("fetch-pokemon")
const inputPokemonNameToFetch = document.getElementById("pokemon-name")
const appendPokemonInfoCont = document.getElementById("pokemon-cont")
// fetch por nombre
const fetchPokemonByName = async (name) =>{
    const rawResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (await rawResponse.ok) return rawResponse.json()
    return false

}
fetchPokemonButton.addEventListener("click", async () =>{
    while(appendPokemonInfoCont.firstChild){ // quitar el pokemon si existe
        appendPokemonInfoCont.firstChild.remove()
    }
    let pokemonName = inputPokemonNameToFetch.value.toLowerCase()
    let pokemon = await fetchPokemonByName(pokemonName)
    if (!pokemon) return alert('error')
    let pokemonAbilities = pokemon.abilities
    let name = pokemon.name
    let image = pokemon.sprites['front_default']
    let abilities = []
    let pokemonPost = document.getElementById("pokemon")


    timeoutAbilitiesFetch = new Promise((resolve,reject)=>{
        pokemonAbilities.forEach(async (ability, index) => { // habilidades
            let pokemonAbilitiesName = ability.ability.name
            let pokemonAbilitieFetchDescription = await (await fetch(`https://pokeapi.co/api/v2/ability/${pokemonAbilitiesName}`)).json()
            let descrptions = pokemonAbilitieFetchDescription.flavor_text_entries
            descrptions.some((descrption, index) => { // encuentra la descripcion en funcion de la habilidad
                if(descrption.language.name == 'es'){
                    abilities.push({
                        ability:pokemonAbilitiesName,
                        descrption:descrption.flavor_text
                    })
                    return true // parar loop cuando se encuentre descripcion en español
                }
            });
            console.log(index)
            if((index + 1) == pokemonAbilities.length) resolve("abilities done")
        });
    })
    await timeoutAbilitiesFetch
    let pokemonNameImage = ` 
    <div id="pokemon" class="pokemon bg-dark d-flex flex-column align-items-center justify-content-center">
        <div id="background-pokemon"></div>
        <p>Nombre Pokemon: ${name} </p>
        <img src="${image}" alt="">
        <table id="table">
            <tr>
                <th>Habilidad</th>
                <th>Descripcion</th>
            </tr>
        </table>
    </div>
    ` //crear el html para nombre y foto
    appendPokemonInfoCont.insertAdjacentHTML('afterbegin', pokemonNameImage)
    abilities.forEach(el =>{
        let table = document.getElementById("table")
        html = `
        <tr>
            <td>${el.ability}</td>
            <td>${el.descrption}</td>
        <tr>
        `
        table.insertAdjacentHTML('beforeend', html)
    })
})