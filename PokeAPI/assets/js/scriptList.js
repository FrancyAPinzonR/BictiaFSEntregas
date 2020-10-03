const PokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=24&offset=00";
// console.log(PokeAPI)

const almacenDatos = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            // console.log("Json -->", json);
            mostrarPokemon(json), paginacion(json);
        })
        .catch((error) => {
            console.log("Error: ", error)
        })
}

const mostrarPokemon = (pokemon) => {
    pokemon.results.forEach((pj) => {
        const pokeURL = pj.url;
        return fetch(pokeURL)
            .then((response) => response.json())
            .then((json) => {
                ordenarPokemoncard(json);
                console.log(json)
            })
            .catch((error) => {
                console.log("Error :", error);
            });
    });

}
// 
const ordenarPokemoncard = (json) => {
    let html = "";
    if (json != "") {
        html += '<div class="col mt-4">';
        html += '<div class="card" style="width: 15rem;">';
        html += `<img src="${json.sprites.other.dream_world.front_default}" class="card-img-top " alt="...">`;
        html += '<div class="card-body ">';
        html += ` <h5 class="card-title"><b>Pokedex ID:</b> ${json.id}</h5>`;
        html += `<h5 class = "card-title" >${json.name}</h5>`;
        html += `<p class="card-text">Height :${json.height}</p>`;
        html += `<p class="card-text">Weight :${json.weight}</p>`;
        html += `<p class="card-text">Type: ${(json.types).map((type)=>type.type.name).join(',')}</p>`;
        html += `<p class="card-text">Abilities: ${(json.abilities).map((ability) => ability.ability.name).join(',')}</p>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
        document.getElementById("vistapokemon").innerHTML += html;

    }


}

// Paginacion
const paginacion = (info) => {
    // let prevDisabled = "";
    // let nextDisabled = "";
    let prevDisabled = !info.previous ? 'disabled' : '';
    let nextDisabled = !info.next ? 'disabled' : '';
    // if (info.previous == null) {
    //     prevDisabled = "disabled";
    // } else {
    //     prevDisabled = "";
    // }

    // if (info.next == null) {
    //     nextDisabled = "disabled";
    // } else {
    //     nextDisabled = "";
    // }

    let html = "";
    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="almacenDatos('${info.previous}')">Previous</a></li>`;
    html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="almacenDatos('${info.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML = html;
};


almacenDatos(PokeAPI);