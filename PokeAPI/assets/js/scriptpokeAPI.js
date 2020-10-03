const formidpokemon = document.getElementById('formidpokemon')

const idpokemonform = document.getElementById('idpokemon')


formidpokemon.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(idpokemonform)
    traerPokemon(idpokemonform.value);

})

// const PokeAPI = "https://pokeapi.co/api/v2/pokemon";
// console.log(PokeAPI)

// const almacenDatos = (url) => {
//     return fetch(url)
//         .then((response) => response.json())
//         .then((json) => {
//             console.log("Json -->", json);
//         })
//         .catch((error) => {
//             console.log("Error: ", error)
//         })
// }


const traerPokemon = (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((json) => {
            // console.log("Pokemon -->", json);
            mostrarPokemon(json)
        })
        .catch((error) => {
            console.log("Error: ", error)
            swal("Error!", "Debes ingresar un ID o Nombre de Pokemon valido", "error");

        })
}

const mostrarPokemon = (pokemon) => {
    let html = "";

    html += '<div class="col-10 my-3 ">';
    html += '<div class="card" style="width: 20rem;">';
    html += ` <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top"  alt="pokemon">`;
    html += '<div class="card-body ">';
    html += ` <h5 class="card-title"><b>Pokedex ID:</b> ${pokemon.id}</h5>`;
    html += ` <h5 class="card-title"><b>Name:</b> ${pokemon.name}</h5>`;
    html += `<p class="card-text"><b>Height:</b> ${pokemon.height}</p>`;
    html += `<p class="card-text"><b>Weight:</b> ${pokemon.weight}</p>`;
    html += `<p class="card-text"><b>Type: </b>${(pokemon.types).map((type)=>type.type.name).join(',')}</p>`;
    html += `<p class="card-text"><b>Abilities:</b> ${(pokemon.abilities).map((ability) => ability.ability.name).join(',')}</p>`;
    html += '</div>';
    html += '</div>';
    html += '</div>';

    document.getElementById("vistapokemon").innerHTML = html;
}



// almacenDatos(PokeAPI);