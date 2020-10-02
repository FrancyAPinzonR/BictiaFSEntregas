const PokeAPI = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
console.log(PokeAPI)

const almacenDatos = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            // console.log("Json -->", json);
            mostrarPokemon(json), paginacion(json.next);
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
}

const mostrarPokemon = (pokemon) => {
    let html = "";
    pokemon.results.forEach((pokemon) => {
        html += '<div class="col my-3 ">';
        html += '<div class="card" style="width: 20rem;">';
        // html += ` <img src="${pokemon.sprites.front_default}" class="card-img-top"  alt="pokemon">`;
        html += '<div class="card-body ">';
        html += ` <h5 class="card-title"><b>Pokedex ID:</b> ${pokemon.url}</h5>`;
        html += ` <h5 class="card-title"><b>Name:</b> ${pokemon.name}</h5>`;
        // html += `<p class="card-text"><b>Height:</b> ${pokemon.height}</p>`;
        // html += `<p class="card-text"><b>Weight:</b> ${pokemon.weight}</p>`;
        // html += `<p class="card-text"><b>Type: </b>${(pokemon.types).map((type)=>type.type.name).join(',')}</p>`;
        // html += `<p class="card-text"><b>Abilities:</b> ${(pokemon.abilities).map((ability) => ability.ability.name).join(',')}</p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });
    document.getElementById("vistapokemon").innerHTML = html;
}

// Paginacion
// const paginacion = (infonext) => {

//     let prevDisable = "";
//     let nextDisable = "";
//     // if (infoprev.previous == null) {
//     //     prevDisable = "disabled";
//     // } else {
//     //     prevDisable = ""
//     // }
//     if (infonext.next == null) {
//         nextDisable = "disabled";
//     } else {
//         nextDisable = ""
//     }

//     let html = "";
//     html += `<li class="page-item ${prevDisable}"><a class="page-link" onclick="almacenDatos('${infonext.prev}') ">Previous</a></li>`;
//     html += `<li class="page-item ${nextDisable}"><a class="page-link" onclick="almacenDatos('${infonext.next}')">Next</a></li>`;
//     document.getElementById("paginacion").innerHTML = html
// }

almacenDatos(PokeAPI);