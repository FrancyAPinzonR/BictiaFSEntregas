const mensajeNombre = document.getElementById('mensajeAlertaNombre')
const mensajeApellido = document.getElementById('mensajeAlertaApellido')
const mensajeCorreo = document.getElementById('mensajeAlertaCorreo')
const mensajePass = document.getElementById('mensajeAlertaPass')
const mensajeEdad = document.getElementById('mensajeAlertaEdad')

const mensajeAlertaTyC = document.getElementById('mensajeAlertaTyC')

function validarFormulario(e) {
    e.preventDefault()
    // let inputName = document.getElementById('name').value
    let inputName = document.getElementById('name')
    console.log(inputName)
    let inputLastName = document.getElementById('lastname')
    console.log(inputLastName)
    let inputEmail = document.getElementById('email')
    console.log(inputEmail)
    let inputPassword = document.getElementById('pass')
    console.log(inputPassword)
    let inputEdad = document.getElementById('edad')
    console.log(inputEdad)

    const inputTyC = document.getElementById('inpuTyC')
    console.log(inputTyC)

    if (inputName.value == '') {
        // swal("Error!", "Debe llenar el campo Nombre", "error");
        mensajeNombre.innerText = 'Por favor complete el campo Nombre'
        inputName.classList.add('bgcAlert')
        mensajeNombre.classList.add('textAlert')
    }
    if (inputLastName.value == '') {
        // swal("Error!", "Debe llenar el campo Apellido", "error");
        mensajeApellido.innerText = 'Por favor complete el campo Apellido'
        inputLastName.classList.add('bgcAlert')
        mensajeApellido.classList.add('textAlert')

    }
    if (inputEmail.value == '') {
        // swal("Error!", "Debe llenar el campo Correo", "error");
        mensajeCorreo.innerText = 'Por favor ingrese un correo valido'
        inputEmail.classList.add('bgcAlert')
        mensajeCorreo.classList.add('textAlert')

    }
    if (inputPassword.value == '') {
        // swal("Error!", "Debe llenar el campo Password", "error");
        mensajePass.innerText = 'Por favor ingrese una clave'
        inputPassword.classList.add('bgcAlert')
        mensajePass.classList.add('textAlert')

    }
    if (inputEdad.value == '') {
        // swal("Error!", "Debe llenar el campo Edad", "error");
        mensajeEdad.innerText = 'Por favor ingrese su edad'
        inputEdad.classList.add('bgcAlert')
        mensajeEdad.classList.add('textAlert')

    }

    if (inputTyC.checked == false) {
        swal("Error!", "Debe Aceptar los terminos y condiciones", "error");
    }

    if ((inputName.value != '') && (inputLastName.value != '') && (inputEmail.value != '') && (inputPassword.value != '') && (inputEdad.value != '' && inputTyC.checked)) {

        swal("Muy Bien!", "Registro exitoso", "success");
        setTimeout(() => {
            window.location = 'Calculadora.html'
        }, 2000)


    } else if (((inputName.value != '') && (inputLastName.value != '') && (inputEmail.value != '') && (inputPassword.value != '') && (inputEdad.value != '' && !inputTyC.checked))) {
        swal("Error!", "Debe Aceptar los terminos y condiciones", "error");

    } else {
        swal("Error!", "Debe llenar todos los campos del formulario", "error");
    }

}