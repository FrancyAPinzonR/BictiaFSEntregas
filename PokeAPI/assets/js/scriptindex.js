const PokeAPI = "https://pokeapi.co/api/v2/pokemon/snorlax";
console.log(PokeAPI)

const almacenDatos = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            // console.log("Json -->", json);
            mostrarPokemon(json)
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
}

const mostrarPokemon = (pokemon) => {
    let html = "";

    html += '<div class="col my-3 ">';
    html += '<div class="card" style="width: 20rem;">';
    html += ` <img src="${pokemon.sprites.front_default}" class="card-img-top"  alt="pokemon">`;
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
almacenDatos(PokeAPI);