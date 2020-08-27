let num1 = parseInt(document.getElementById('num1').value)
let num2 = parseInt(document.getElementById('num2').value)
console.log(num1, num2)

let resultado = document.getElementById('respuesta')

function operaciones(operador) {

    switch (operador) {
        case "suma":
            resultado.innerText = num1 + num2
            console.log(num1, resultado)
            break;
        case "resta":
            resultado.innerText = num1 - num2
            console.log(resultado)
            break;
        case "multiplicacion":
            resultado.innerText = num1 * num2
            console.log(resultado)
            break;
        case "division":
            resultado.innerText = num1 / num2
            console.log(resultado)
            break;
        default:
            console.log('Operacion No Valida')
            break;

    }
}