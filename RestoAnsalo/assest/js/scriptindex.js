const customSwitch = document.getElementById('customSwitch')
const customSwitch1 = document.getElementById('customSwitch1')
const customSwitch2 = document.getElementById('customSwitch2')


customSwitch.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.className = "container col-lg-3 col-md-6 col-sm-12 mt-3 border border-dark rounded main"
    $('.toggle-trigger').prop('checked', true).change()
    $('.toggle-trigger1').prop('checked', false).change()
    $('.toggle-trigger2').prop('checked', false).change()
    localStorage.setItem('color', "Original")
})

customSwitch1.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.className = "container col-lg-3 col-md-6 col-sm-12 mt-3 border border-dark rounded main Treto"
    $('.toggle-trigger1').prop('checked', true).change()
    $('.toggle-trigger').prop('checked', false).change()
    $('.toggle-trigger2').prop('checked', false).change()
    localStorage.setItem('color', "Treto")
})


customSwitch2.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.className = "container col-lg-3 col-md-6 col-sm-12 mt-3 border border-dark rounded main Toscuro"
    $('.toggle-trigger2').prop('checked', true).change()
    $('.toggle-trigger').prop('checked', false).change()
    $('.toggle-trigger1').prop('checked', false).change()
    localStorage.setItem('color', "Toscuro")
})

/*FUNCION PARA TRAER STORAGE*/
const MantenerColor = () => {
    const temaGuardado = localStorage.getItem('color')
    if (temaGuardado == "Treto") {
        document.getElementById('container').classList.add('Treto')
        $('.toggle-trigger1').prop('checked', true).change()
    } else if (temaGuardado == "Toscuro") {
        document.getElementById('container').classList.add('Toscuro')
        $('.toggle-trigger2').prop('checked', true).change()
    } else if (temaGuardado == "Original") {
        // document.getElementById('container').container.className = "container col-lg-3 col-md-6 col-sm-12 mt-3 border border-dark rounded main"
        $('.toggle-trigger').prop('checked', true).change()
    }
}

MantenerColor()

/*--------------------------------------------------- Letras y Numeros ----------------------------------------------------------------*/


const mletras = document.getElementById('mletras')
const mnumeros = document.getElementById('mnumeros')
const abecedarios = document.querySelectorAll('.abecedario')
const reset = document.getElementById('reset')

const arrayLetras = []
const arrayNumeros = []

const teclado = (e) => {
    const textoTarget = e.target.innerText

    const valor = textoTarget.toString()
    const valorsepa = valor.split(" ", 1)



    if (arrayLetras == 0 && valorsepa != "A") {
        swal("Error!", "Ingrese la letra A primero", "error");
    } else if (arrayLetras == 0 && valorsepa == "A") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "A")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "A" && valorsepa != "B") {
        swal("Error!", "Debe ingresar la letra B primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "A" && valorsepa == "B") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "B")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "B" && valorsepa != "C") {
        swal("Error!", "Debe ingresar la letra C primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "B" && valorsepa == "C") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "C")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "C" && valorsepa != "D") {
        swal("Error!", "Debe ingresar la letra D primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "C" && valorsepa == "D") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "D")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "D" && valorsepa != "E") {
        swal("Error!", "Debe ingresar la letra E primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "D" && valorsepa == "E") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "E")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "E" && valorsepa != "F") {
        swal("Error!", "Debe ingresar la letra F primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "E" && valorsepa == "F") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "F")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "F" && valorsepa != "G") {
        swal("Error!", "Debe ingresar la letra G primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "F" && valorsepa == "G") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "G")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "G" && valorsepa != "H") {
        swal("Error!", "Debe ingresar la letra H primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "G" && valorsepa == "H") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "H")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "H" && valorsepa != "I") {
        swal("Error!", "Debe ingresar la letra I primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "H" && valorsepa == "I") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "I")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    } else if (arrayLetras[arrayLetras.length - 1] == "I" && valorsepa != "J") {
        swal("Error!", "Debe ingresar la letra J primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "I" && valorsepa == "J") {
        mletras.innerText += valorsepa
        arrayLetras.push(valorsepa)
        localStorage.setItem('letra', "J")
        localStorage.setItem('datos', JSON.stringify(arrayLetras));
    }
    // Numeros
    else if (arrayLetras[arrayLetras.length - 1] == "J" && valorsepa != "A" && arrayNumeros == 0) {
        swal("Error!", "Ingrese el numero  1  primero", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "J" && valorsepa == "A" && arrayNumeros == 0) {
        mnumeros.innerText += "1"
        arrayNumeros.push("1")
        localStorage.setItem('numero', "1")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "1" && valorsepa != "B") {
        swal("Error!", "Debe ingresar el numero 2 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "1" && valorsepa == "B") {
        mnumeros.innerText += "2"
        arrayNumeros.push("2")
        localStorage.setItem('numero', "2")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "2" && valorsepa != "C") {
        swal("Error!", "Debe ingresar el numero 3 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "2" && valorsepa == "C") {
        mnumeros.innerText += "3"
        arrayNumeros.push("3")
        localStorage.setItem('numero', "3")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "3" && valorsepa != "D") {
        swal("Error!", "Debe ingresar el numero 4 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "3" && valorsepa == "D") {
        mnumeros.innerText += "4"
        arrayNumeros.push("4")
        localStorage.setItem('numero', "4")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "4" && valorsepa != "E") {
        swal("Error!", "Debe ingresar el numero 5 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "4" && valorsepa == "E") {
        mnumeros.innerText += "5"
        arrayNumeros.push("5")
        localStorage.setItem('numero', "5")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "5" && valorsepa != "F") {
        swal("Error!", "Debe ingresar el numero 6 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "5" && valorsepa == "F") {
        mnumeros.innerText += "6"
        arrayNumeros.push("6")
        localStorage.setItem('numero', "6")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "6" && valorsepa != "G") {
        swal("Error!", "Debe ingresar el numero 7 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "6" && valorsepa == "G") {
        mnumeros.innerText += "7"
        arrayNumeros.push("7")
        localStorage.setItem('numero', "7")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "7" && valorsepa != "H") {
        swal("Error!", "Debe ingresar el numero 8 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "7" && valorsepa == "H") {
        mnumeros.innerText += "8"
        arrayNumeros.push("8")
        localStorage.setItem('numero', "8")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "8" && valorsepa != "I") {
        swal("Error!", "Debe ingresar el numero 9 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "8" && valorsepa == "I") {
        mnumeros.innerText += "9"
        arrayNumeros.push("9")
        localStorage.setItem('numero', "9")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
    } else if (arrayNumeros[arrayNumeros.length - 1] == "9" && valorsepa != "J") {
        swal("Error!", "Debe ingresar el numero 0 primero", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "9" && valorsepa == "J") {
        mnumeros.innerText += "0"
        arrayNumeros.push("0")
        localStorage.setItem('numero', "0")
        localStorage.setItem('numeros', JSON.stringify(arrayNumeros));
        swal("Felicidades!", "Terminaste", "success");
    }



    // else {
    //     mletras.innerHTML += aux2
    //     console.log(aux2)
    // }

}

for (let i = 0; i < abecedarios.length; i++) {
    abecedarios[i].addEventListener('click', teclado)
}

const MantenerLetras = () => {
    const letrasEnStorage = localStorage.getItem("datos")
    const numerosEnStorage = localStorage.getItem("numeros")
    mletras.innerText = JSON.parse(letrasEnStorage).join('')
    mnumeros.innerText = JSON.parse(numerosEnStorage)
    //Error al agregar .join() a mnumeros, desabilita reset
}
MantenerLetras()



reset.addEventListener('click', () => {
    swal({
            title: "Seguro?",
            text: "Si acepta, perdera la informacion escrita!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                mletras.innerHTML = ' '
                mnumeros.innerHTML = ' '
                arrayLetras.length = 0
                arrayNumeros.length = 0
                localStorage.removeItem('datos');
                localStorage.removeItem('numeros');
                swal("Hecho! Los datos fueron eliminados!", {
                    icon: "success",
                });
            } else {
                swal("Continua!");
            }
        });

})

// for (let abecedario of abecedarios) {
//     abecedario.addEventListener('click', teclado)
// }