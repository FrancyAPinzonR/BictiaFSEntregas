const FormSignup = document.getElementById('formsignup')

let listaPersona = [];


FormSignup.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputUsername = document.getElementById('inputUserame').value
    const inputEmail = document.getElementById('inputEmail').value
    const inputPassword = document.getElementById('inputPassword').value


    const person = {
        nombre: inputUsername,
        email: inputEmail,
        pass: inputPassword

    }

    guardarEnStorage(person)
    // alert('Usuario registrado')
    swal("Exito", "Usuario registrado", "success");
    setTimeout(() => {
        window.location = './assest/pages/login.html'
    }, 2000)

})

const guardarEnStorage = (person) => {

    listaPersona.push(person)
    const personString = JSON.stringify(listaPersona)
    localStorage.setItem('person', personString)

}