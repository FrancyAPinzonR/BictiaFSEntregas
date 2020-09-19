const tablaArtistas = document.getElementById('tablaArtistas')


const artistasGuardadosEnStorage = () => {
    const artistasEnStorage = JSON.parse(localStorage.getItem('artistas'))
    console.log(artistasEnStorage)
    for (let i = 0; i < artistasEnStorage.length; i += 1) {
        tablaArtistas.innerHTML += `
            <tr>
                <th>${i+1}</th>
                <td>${artistasEnStorage[i].nombre}</td>
                <td>${artistasEnStorage[i].genero}</td>
                <td>${artistasEnStorage[i].album}</td>
                <td>${artistasEnStorage[i].cancion}</td>
                <td>${artistasEnStorage[i].ano}</td>
                
            <tr>
        `

        // console.log(artistasEnStorage[i])
    }

}
artistasGuardadosEnStorage()

document.getElementById('limpiar').addEventListener('click', () => {
    localStorage.clear()
    tablaArtistas.innerHTML = ''
})