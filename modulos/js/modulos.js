import {Num_PI} from "./constantes.js"
import {math_basicas} from "./aritmetica.js"
// Le podemos colocar alias al importar, como:
// import {math_basicas as mb} from "./aritmetica.js"

console.log(Num_PI)
console.log('Funciones basicas')
console.log(math_basicas.sumar(12, 4))
console.log(math_basicas.restar(12, 4))
console.log(math_basicas.multiplicar(12, 4))
console.log(math_basicas.dividir(12, 4))