function sumar(a, b){
    return a + b
}

function restar(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    return a / b
}

export const math_basicas = {
    sumar, restar, multiplicar, dividir
}

// Esta función no hay necesidad de importar donde se llame al modulo aritmetica.js
export default function saludar(name = 'desconocido') {
    console.log(`Hola ${name} soy la función por defecto del modulo aritmetica.js`)
}