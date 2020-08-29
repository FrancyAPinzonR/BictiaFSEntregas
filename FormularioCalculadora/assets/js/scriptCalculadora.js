let num1 = 0
let num2 = 0

console.log(num1, num2)

let resultado = document.getElementById('respuesta')

function operaciones(operador) {

    console.log(operador)
    num1 = parseInt(document.getElementById('num1').value)
    num2 = parseInt(document.getElementById('num2').value)

    switch (operador) {
        case "suma":
            resultado.innerText = num1 + num2
            console.log(num1, num2, resultado)
            break;
        case "resta":
            resultado.innerText = num1 - num2
            console.log(num1, num2, resultado)
            break;
        case "multiplicacion":
            resultado.innerText = num1 * num2
            console.log(num1, num2, resultado)
            break;
        case "division":
            resultado.innerText = num1 / num2
            console.log(num1, num2, resultado)
            break;
        default:
            resultado.innerText = "No Valido, ingrese los valores en cada casilla y seleccione un operador"
            console.log('Operacion No Valida')
            break;

    }
}