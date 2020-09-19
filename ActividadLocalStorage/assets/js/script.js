const FormArtista = document.getElementById('FormRegistroArtistas')

let listaArtistas = [];


FormArtista.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('name').value
    const inputGenre = document.getElementById('genre').value
    const inputAlbum = document.getElementById('album').value
    const inputSong = document.getElementById('song').value
    const inputAge = document.getElementById('age').value

    const artista = {
        nombre: inputName,
        genero: inputGenre,
        album: inputAlbum,
        cancion: inputSong,
        ano: inputAge
    }
    guardarEnStorage(artista)
    // alert('Artista registrado')
    swal("Exito", "Artista registrado", "success");
    setTimeout(() => {
        window.location = './assets/pages/listaartistas.html'
    }, 2000)

})

const guardarEnStorage = (artista) => {
    if (localStorage.getItem('artistas') == null) {
        listaArtistas.push(artista)
        const artistasString = JSON.stringify(listaArtistas)
        localStorage.setItem('artistas', artistasString)
    } else {
        const listaEnStorage = JSON.parse(localStorage.getItem('artistas'))
        console.log(listaEnStorage)
        listaEnStorage.push(artista)
        const artistasString = JSON.stringify(listaEnStorage)
        localStorage.setItem('artistas', artistasString)
    }
}