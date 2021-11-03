# JavaScript-JMircha
En este repositorio se guardara lo visto en el curo de Jhon Mircha el cual tiene un canal de YouTube Genial. 

# AprendeJavascript.org

* https://aprendejavascript.org/

## ¿Cómo?
De forma GRATUITA, te voy a enseñar a programar en este maravilloso lenguaje, a través de videos que encontrarás en mi canal de YouTube y artículos que podrás leer en mi Blog.

Con una metodología efectiva y planificada, aprenderás de cero a experto todos los conceptos esenciales del lenguaje.

Poco a poco irás desarrollando tu lógica de programación, a través de teoría y práctica que el curso te dosificará a lo largo de las diferentes secciones de contenido.

## ¿Qué esperas?
Comienza ya mismo... tu carrera de programador web.

## ¿Por qué hago esto?
## ¿Qué gano?
Creo que la vida me regaló el don de la enseñanza y soy fiel creyente de que el mundo mejorará a través de la educación. Así que este es mi granito de arena para hacer un mundo mejor 😀🌎.
Si logro que aprendas a programar a través de mi contenido y eso te da oportunidades profesionales que mejoren tu calidad de vida...

...entonces habré cumplido mi misión 🤗

Además mi contenido esta monetizado en YouTube así que mientras aprendes, me ayudas. Es un ganar 💪🤓, ganar 💪🤓.

Si adicionalmente deseas apoyar mi causa puedes hacer donaciones a mi cuenta de Paypal.

Comienza el Curso
Lo único que tienes que hacer es ir estudiando las lecciones del curso que a continuación encontrarás.

Si eres novato te sugiero seguir el orden que te propongo, si ya tienes experiencia o sólo quieres reforzar ciertos conocimientos, eres libre de navegar de la forma que mejor lo consideres para tu aprendizaje.


# Introducción a JavaScript

## Características y Gramática

### Isomorfismo
Hoy JavaScript, es el único lenguaje capaz de ejecutarse en las 3 capas de una aplicación:

1. Frontend (con JavaScript).
2. Backend (con Node.js).
3. Persistencia de Datos (con MongoDB, Couch DB, Firebase, etc).

**Con JavaScript puedes:**

* Diseño y Desarrollo Web.
* Hacer Videojuegos.
* Experiencias 3D, Realidad Aumentada, Realidad Virtual.
* Controlar Hardware (drones, robots, electrodomésticos, wearables, etc).
* Aplicaciones Híbridas y Móviles.
* Aprendizaje Automático.
* etc.

### Características

* Lenguaje de Alto Nivel.
* Interpretado.
* Dinámico.
* Débilmente Tipado.
* Multi paradigma.
* Sensible a MAYÚSCULAS y minúsculas.
* No necesitas los puntos y comas al final de cada línea.

### Escritura de código

Los **identificadores(Variable)** deben comenzar con:

* Una letra o
* Un signo de dolar $ o
* Un guión bajo _
* **Nunca con números o caracteres especiales**.

Usa **snake_case** en:

* Nombre de archivos:

```
mi_archivo_javascript.js;
```

Usa **UPPER_CASE** en:

* Constantes:

```
const UNA_CONSTANTE = "Soy una constante",
PI = 3.141592653589793;
```

Usa **UpperCamelCase** en:

* Clases:

```
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}
```

Usa **lowerCamelCase** en:

* Objetos:

```
const unObjeto = {
  nombre: "Jonathan",
  email: "jonmircha@gmail.com",
};
```

* Primitivos:

```
let unaCadena = "Hola Mundo",
  unNumero = 19,
  unBoolean = true;
```

* Funciones:

```
function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Jonathan");
```

* Instancias:

```
const ajax = new XMLHttpRequest(),
  jon = new SerHumano("Jonathan", "Hombre");
```

### Palabras reservadas

```
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with
```

### Ordenamiento de código

1. IMPORTACIÓN DE MÓDULOS.
2. DECLARACIÓN DE VARIABLES.
3. DECLARACIÓN DE FUNCIONES.
4. EJECUCIÓN DE CÓDIGO.

### Tipos de datos en JavaScript

**Primitivos**: Se accede directamente al valor.

* string
* number
* boolean
* null
* undefined
* NaN

**Complejos o Compuestos**: Se accede a la referencia del valor.

* object = {}
* array = []
* function () { }
* Class {}
* etc.


# Tipos de Datos

## Var vs Let

### Lista de extenciones para Visual Studio Code
* ESLint
* Live Server
* Prettier - Code formatter

### Alcance de varibales

```
# Suele ser una mala practica.
var global = 'ambito global'
# Es recomendado opara evitar problemas.
let bloque = 'ambito de bloque'
```
* Ambito Global
```
var musica = 'Rock'
console.log("Variable antes del Bloque :", musica); {
    var musica = 'Pop'
    console.log("Variable dentro del bloque :", musica)
}
console.log("Variable despues del Bloque :", musica);
```
```
Variable antes del Bloque : Rock
Variable dentro del bloque : Pop
Variable despues del Bloque : Pop
```
* Ambito Local
```
let musica_let = 'Rock'
console.log("Variable antes del Bloque :", musica_let); {
    let musica_let = 'Pop'
    console.log("Variable dentro del bloque :", musica_let)
}
console.log("Variable despues del Bloque :", musica_let);
```
```
Variable antes del Bloque : Rock
Variable dentro del bloque : Pop
Variable despues del Bloque : Rock
```

## Constantes (const)

### Variables constantes - Primitivos
* Estas variables se deben definir desde el principio y no puede cdambiar en el tiempo.
* Se definen en mayuscula.
```
const PI = 3.1416
console.log("Numero PI - Variable constante:", PI)
```
```
Numero PI - Variable constante: 3.1416
```

### Variables compuestas
En las variables compuestas las constantes si pueden cambiar, en este caso las declaramos de tipo **LET**, pero si estuvieran de tipo **CONST** no pasa nada.
* Objetos
```
let objeto = {
    nombre: 'Tomas Escobar',
    edad: 23
}
console.log(objeto)
// Agregar una nueva propiedad en el objeto
objeto.correo = 'tomasj@unicauca.edu.co'
```
```
{nombre: 'Tomas Escobar', edad: 23, correo: 'tomasj@unicauca.edu.co'}
```
* Arreglos
```
let colores = ['rojo', 'verde', 'amarillo']
// Agregar nuevo item
colores.push('blanco')
console.log(colores)
```
```
['rojo', 'verde', 'amarillo', 'blanco']
```

## Cadenas de Texto (Strings)

### Sitio web para desarrolladores - JavaScript
Nos sirve para mirar si llegamos a tener duda en cualquier duda en JavaScript [MDN Web Docs](https://developer.mozilla.org/es/).

* Cadenas de texto - [more information](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)

```
let nombre = 'Tomas Jesus'
console.log(nombre)
let apellido = new String('Escobar Cueltan')
console.log(apellido)
```
```
Tomas Jesus
String {'Escobar Cueltan'}
```

## Plantillas de cadenas de texto ( Template Strings )

* Concatenación
```
let nombre = 'Tomas Jesus'
let apellido = 'Escobar Cueltan'
let nombre_completo = nombre + ' ' + apellido
console.log(nombre_completo)
```
```
Tomas Jesus Escobar Cueltan
```

* Interpolación de variables
```
let nombre = 'Tomas Jesus'
let apellido = 'Escobar Cueltan'
let saludo = `Hola mi nombre es ${nombre.toLocaleUpperCase()} ${apellido.toLocaleUpperCase()}`
console.log(saludo)
```
```
Hola mi nombre es TOMAS JESUS ESCOBAR CUELTAN
```

* Template String
```
let ul = `
<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
`
console.log(ul)
```
```
<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
```

## Números (Numbers)
* Declaración
```
let num_a = 2
let num_b = new Number(2)
let num_c = 1.7
console.log(num_a)
console.log(num_b)
console.log(num_c)
```
```
2
Number {2}
1.7
```
* Metodos
```
let d = "5.6"
let e = 7.19
let f = 5
console.log(typeof d)
console.log(typeof e)
console.log(e + parseInt(d))
console.log(e + parseFloat(d))
```
```
string
number
12.190000000000001
12.79
```

## Booleans

* Declaración
```
let verdadero = true
let falso = false
console.log(verdadero)
console.log(falso)
console.log(typeof verdadero)
```
```
true
false
boolean
```
* Metodos - Truthy
En JavaScript, un valor verdadero es un valor que se considera  true/verdadero cuando es evaluado en un contexto Booleano. Todos los valores son verdaderos a menos que se definan como falso (es decir, excepto false, 0, "", null, undefined, y NaN).

**True**
```
console.log(Boolean(true))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(42))
console.log(Boolean("foo"))
console.log(Boolean(new Date()))
console.log(Boolean(-42))
console.log(Boolean(3.14))
console.log(Boolean(-3.14))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))
```
```
true
...
```
**False**
```
console.log(Boolean(false))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(""))
```
```
false
...
```

## undefined, null & NaN
* undefined
Cuando una variable ha quedado sin definir tiene un valor especial denominado undefined, que se podría traducir como «sin definir«. Este valor puede resultar un poco desconcertante, ya que además de un tipo de datos, existe una variable con ese nombre y también es un valor como tal.

En primer lugar undefined es es un tipo de dato y por lo tanto se puede consultar con typeof.
```
var variable;
if (typeof variable === "undefined") {
    console.log('ok');
}
```
```
ok
```
* null
El caso del valor nulo es también bastante singular. En este caso null es un literal definido en la especificación del lenguaje, no una variable global como en el caso undefined, por lo tanto, es una palabra reservada y no podremos utilizarla como nombre de variable.

Podemos directamente utilizar el literal null para comprobar este valor es el que contiene una determinada variable o es el retorno de una función.
```
var variable = null;
if (variable === null) {
    console.log('ok');
}
```
```
ok
```
* NaN
Cuando trabajamos con valores numéricos tenemos que tener en cuenta la existencia de NaN (Not a Number). Aunque realmente sí es un valor de tipo numérico, no podemos operar con él como con el resto de valores numéricos, ya que cualquier operación que se realice con NaN siempre devolverá NaN.

Normalmente se obtiene NaN como resultado de las operaciones con funciones y métodos de Math donde no ha sido posible convertir un valor a numérico o se ha producido algún error. Ejemplos sencillos en los que se obtiene este tipo de valor son:
```
console.log(Math.sqrt(-1))
console.log(parseInt('no'))
```
```
NaN
NaN
```

## Funciones - Declaradas, Expresadas
**Declaradas**: Se pueden acceder **antes** de ser declaradas.

**Expresadas**: Se pueden acceder **despues** de ser declaradas.

* Paso de parametros - Sin retorno
```
function saludoPersona(nombre_estudiante) {
    console.log(`Hola ${nombre_estudiante}, bienvenido a unicauca.`)
}
saludoPersona("Tomas Escobar")
saludoPersona("Freider Escobar")
```
```
Hola Tomas Escobar, bienvenido a unicauca.
Hola Freider Escobar, bienvenido a unicauca.
```

* Paso de parametros - Con retorno
```
function sumarEdad(edad) {
    let edadAux = edad + 10
    return edadAux
}
console.log(`Hola, dentro de 10 años tendras ${sumarEdad(23)} años.`)
console.log(`Hola, dentro de 10 años tendras ${sumarEdad(20)} años.`)
```
```
Hola, dentro de 10 años tendras 33 años.
Hola, dentro de 10 años tendras 30 años.
```
* Funciones declaradas - Parametros con valor por defecto
```
function saludDepartamento(departamento = 'Putumayo') {
    console.log(`Hola, bienvenido al ${departamento}`)
}
saludDepartamento()
saludDepartamento('Cauca')
saludDepartamento('Casanare')
```
```
Hola, bienvenido al Putumayo
Hola, bienvenido al Cauca
Hola, bienvenido al Casanare
```
* Funciones expresadas o anonimas
**Ejemplo**
```
const operacionesBasicas = function(a, b) {
    console.log(`La suma de ${a} mas ${b} es : ${a+b}`)
    console.log(`La resta de ${a} menos ${b} es : ${a-b}`)
    console.log(`La multiplicación de ${a} por ${b} es : ${a*b}`)
    console.log(`La division de ${a} entre ${b} es : ${a/b}`)
}
```
**Primer llamado**
```
operacionesBasicas(4, 2)
```
```
La suma de 4 mas 2 es : 6
La resta de 4 menos 2 es : 2
La multiplicación de 4 por 2 es : 8
La division de 4 entre 2 es : 2
```
**Segundo llamado**
```
operacionesBasicas(16, 8)
```
```
La suma de 16 mas 8 es : 24
La resta de 16 menos 8 es : 8
La multiplicación de 16 por 8 es : 128
La division de 16 entre 8 es : 2
```

## Arreglos (Arrays)
* Declaración
```
const a = []
const arreglo = [9, 7.85, true, "hola", [5.2, 8, false], 3, 4, "h"]
console.log(a)
console.log(arreglo)
console.log(arreglo.length)
console.log(arreglo[4])
// Crea un array de 50 posiciones con cero por defecto.
const d = Array(50).fill(0)
console.log(d)
```
```
[]
[9, 7.85, true, 'hola', Array(3), 3, 4, 'h']
8
[5.2, 8, false]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```
* Metodos
```
console.log(arreglo)
arreglo.push("Thomas")
console.log(arreglo)
arreglo.pop()
console.log(arreglo)
```
```
(8) [9, 7.85, true, 'hola', Array(3), 3, 4, 'h']
(9) [9, 7.85, true, 'hola', Array(3), 3, 4, 'h', 'Thomas']
(8) [9, 7.85, true, 'hola', Array(3), 3, 4, 'h']
```
* Recorrer Array
```
arreglo.forEach(function(elemento, index) {
    console.log(`<li id='${index}'>${elemento}</li>`)
})
```
```
<li id='0'>9</li>
<li id='1'>7.85</li>
<li id='2'>true</li>
<li id='3'>hola</li>
<li id='4'>5.2,8,false</li>
<li id='5'>3</li>
<li id='6'>4</li>
<li id='7'>h</li>
```

## Objetos
Un objeto es una coleccion de llaves valores.
```
let cadena = new String("Cadena de texto")
// Los objetos se declaran como constantes.
const objeto = {}
console.log(cadena)
console.log(objeto)
```
```
String {'Cadena de texto'}
{}
```
* Llave Valor
```
const estudiante = {
    nombre: 'Tomas Jesus',
    apellido: 'Escobar Cueltan',
    correro: 'tomasj@unicauca.edu.co',
    edad: 23,
    carrera: 'Ingenieria de sistemas',
    soltero: false,
    estudiante_activo: true,
    info: function() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`)
        console.log(`Edad: ${this.edad}`)
    }
}
console.log(estudiante.correro)
console.log(estudiante['correro'])
estudiante.info()
```
```
tomasj@unicauca.edu.co
tomasj@unicauca.edu.co
Nombre: Tomas Jesus Escobar Cueltan
Edad: 23
```
* Metodos - Objects
```
console.log(Object.keys(estudiante))
console.log(Object.values(estudiante))
```
```
['nombre', 'apellido', 'correro', 'edad', 'carrera', 'soltero', 'estudiante_activo', 'info']

['Tomas Jesus', 'Escobar Cueltan', 'tomasj@unicauca.edu.co', 23, 'Ingenieria de sistemas', false, true, ƒ]
```


# Estructuras de Control

## Tipos de Operadores

* Operadores Aritmeticos
```
let a = 20
let b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
```
```
25
15
100
4
0
```
* Operadores Relacionales
```
let a = 8
let b = 5
// >, <, >=, <=
console.log(a > b)
```
```
true
```
### Operadores Relacionales especiales
Segun las buenas practicas de programacion, se recomienda siempre utilizar triple igual.
* = ,Un igual es asignación de variable.
* == ,Dos iguales es comparación de valores.
* === ,Tres iguales es comparación de tipo de dato y de valor.

1. Example one
```
console.log(7 == 7)
```
```
true
```

2. Example two
```
console.log('7' == 7)
```
```
true
```

3. Example three
```
console.log(7 === 7)
```
```
true
```

4. Example four
```
console.log('7' === 7)
```
```
false
```
### Operadores de decremento he incremento
```
let i = 12
i++
console.log(i)
i--
console.log(i)
i += 3
console.log(i)
i -= 3
console.log(i)
i *= 3
console.log(i)
i /= 3
console.log(i)
i %= 3
console.log(i)
```
```
13
12
15
12
36
12
0
```
### Operadores logicos
* ! ,**Not**: Niega, es decir lo que es verdadero lo vuelve falso y lo que es falso lo vuelve verdadero.
* || ,**Or**
* && ,**And**

```
console.log(!true)
console.log((9 === '9') || (9 === 9))
console.log((9 === '9') && (9 === 9))
```
```
false
true
false
```

## Condicionales

* IF - ELSE - ELSEIF
```
let edad = 19
if (edad > 17) {
    console.log('Mayor de edad.')
} else if (edad < 18) {
    console.log('Menor de edad.')
} else {
    console.log('No sabemos.')
}
```
```
Mayor de edad.
```
* OPERADOR TERNARIO (CONDICION)
```
let eresMayor = (edad > 17) ? "Mayor de edad" : "Mayor de edad"
console.log(eresMayor)
```
```
Mayor de edad
```
* SWITCH - CASE
```
let dia = 3
switch (dia) {
    case 1:
        console.log("LUNES")
        break
    case 2:
        console.log("MARTES")
        break
    case 3:
        console.log("MIERCOLES")
        break
    case 4:
        console.log("JUEVES")
        break
    case 5:
        console.log("VIERNES")
        break
    default:
        console.log("No existe tal día.")
        break
}
```
```
MIERCOLES
```

## Ciclos (Loops)
* WHILE
```
let contador = 5
while (contador < 10) {
    console.log(contador)
    contador++
}
```
```
5, 6, 7, 8, 9
```

* DO - WHILE
```
let contador = 7
do {
    console.log(contador)
    contador++
} while (contador < 10)
```
```
7, 8, 9
```

* FOR
```
let contador = 5
for (let index = 0; index < contador; index++) {
    console.log(index)
}
```
```
0, 1, 2, 3, 4
```

* FOR - IN 
```
const estudiante = {
    nombre: 'Tomas',
    apellido: 'Escobar',
    telefono: '3135673141',
    edad: 23,
    universidad: 'Unicauca'
}
for (const key in estudiante) {
    console.log(`{ ${key} : ${estudiante[key]} }`)
}
```
```
{ nombre : Tomas }
{ apellido : Escobar }
{ telefono : 3135673141 }
{ edad : 23 }
{ universidad : Unicauca }
```

* FOR - OF 
```
let colores = ['rojo', 'verde', 'amarillo', 'blanco']
for (const c of colores) {
    console.log(c)
}
```
```
rojo
verde
amarillo
blanco
```

## Manejo de Errores
* TRY - CATCH
```
try {
    console.log('Incio try.')
    noexiste
    console.log('Fin try.')
} catch (error) {
    console.log(`Ocurrio un error => ${error}`)
} finally {
    console.log("Siempre se ejecuta")
}
```
```
Incio try.
Ocurrio un error => ReferenceError: noexiste is not defined
Siempre se ejecuta
```
* TRY - CATCH - PERSONALIZADO
```
try {
    let numero = '22'
    if (typeof numero !== 'number') {
        throw new Error('El caracter introducido no es un numero.')
    }
    console.log('Es un numero.')
} catch (error) {
    console.log(`Ocurrio un error => ${error}`)
}
```
```
Ocurrio un error => Error: El caracter introducido no es un numero.
```

## Break & Continue
* **Break**
Se detiene un bucle utilizando la palabra break. Detener un bucle significa salirse de él y dejarlo todo como está para continuar con el flujo del programa inmediatamente después del bucle.

```
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i)
}
```
```
0, 1, 2
```

* **Continue**
Sirve para volver al principio del bucle en cualquier momento, sin ejecutar las líneas que haya por debajo de la palabra continue.
```
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}
```
```
0, 1, 2, 4
```

## Destructuración
* Arreglos []
```
const numeros = [1, 2, 3]
const [one, two, three] = numeros
console.log(`${one} - ${two} - ${three}`)
```
```
1 - 2 - 3
```

* Objetos {}
```
let persona = {
    nombre: 'Tomas',
    apellido: 'Escobar',
    edad: 23
}
let { nombre, apellido, edad } = persona
console.log(`${nombre} - ${apellido} - ${edad}`)
```
```
Tomas - Escobar - 23
```

## Objetos literales

```
let name = 'Copito'
let age = 3

let perro = {
    name,
    age,
    ladrar() {
        console.log('Wuao Wuao Wuao')
    },
    raza: 'Callejero'
}
console.log(perro)
```
```
{name: 'Copito', age: 3, raza: 'Callejero', ladrar: ƒ}
```

## Parámetros REST & Operador Spread
**El parámetro REST**
Esta característica   permite a una función recibir uno o n cantidad de parametros e incluso cero. Es importante mencionar que dicho parámetro  siempre retornara un array con los parámetros enviados. Para definir un parámetro REST es necesario anteponer   ...   al nombre del parámetro.

```
// Función que suma vectores, recibe dos por defecto, pero puede sumar los que decee, gracias a que trabaja con un parámetro REST( array_c )
function sumar(a, b, ...c) {
    let resultado = a + b
    c.forEach(function(n) {
        resultado += n
    })
    return resultado
}
console.log(sumar(1, 2))
console.log(sumar(1, 2, 3))
console.log(sumar(1, 2, 3, 4))
console.log(sumar(1, 2, 3, 4, 5))
```
```
3
6
10
15
```

**SPREAD operator**
El operador spread toma un array  y lo convierte en una lista de parámetros,  justo lo contrario del parámetro REST. Supongamos que tenemos un array de números y necesitamos saber el valor máximo de ellos; Utilizando el método estático de la clase Math lo podríamos hacer solo que este método no soporta arrays... Entonces empleamos  el operador SPREAD.

```
const array_a = [7, 8, 9, 4, 5],
    array_b = [1, 2, 3, 6]
console.log([array_a, array_b])
console.log([...array_a, array_b])
console.log([...array_a, ...array_b])
```
```
(2) [Array(5), Array(4)]
(6) [7, 8, 9, 4, 5, Array(4)]
(9) [7, 8, 9, 4, 5, 1, 2, 3, 6]
```

## Arrow Functions
Capturan el objeto en el contexto donde se encuentren.

### Una sola linea de codigo
Sila la función tuviera que retornar en una sola linea, no es necesario colocar el return.
```
const sumar = (a = 0, b = 0) => console.log(a + b)
sumar()
sumar(4)
sumar(4, 10)
```
```
0, 4, 14
```

### Mas de una linea de codigo
```
const sumarVectores = (array_a, array_b, ...array_c) => {
    let suma = [...array_a, ...array_b]
    for (let v of array_c) {
        suma = [...suma, ...v]
    }
    return suma
}
console.log(sumarVectores([1, 2], [3, 4, 5]))
console.log(sumarVectores([1, 2], [3, 4, 5], [6, 7, 8]))
console.log(sumarVectores([1, 2], [3, 4, 5], [6, 7, 8], [9]))
console.log(sumarVectores([1, 2], [3, 4, 5], [6, 7, 8], [9], [0]))
```
```
(5) [1, 2, 3, 4, 5]
(8) [1, 2, 3, 4, 5, 6, 7, 8]
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

### Recorrer Array
```
let operaciones = ['suma', 'resta', 'multiplicación', 'división']
operaciones.forEach((el, index) => console.log(`${el} : ${index}`))
```
```
suma : 0
resta : 1
multiplicación : 2
división : 3
```
### Capturan el objeto en el contexto donde se encuentren.
No declarar este tipo de funciones dentro de objetos literales.

* Contexto Local
```
const perro = {
    nombre: "copito",
    ladrar: function() {
        console.log(this)
    }
}
perro.ladrar()
```
```
{nombre: 'copito', ladrar: ƒ}
```
* Contexto Global
```
const perro = {
    nombre: "copito",
    ladrar: () => {
        console.log(this)
    }
}
perro.ladrar()
```
```
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

# Programación Orientada a Objetos

**Clases**: Modelo a seguir.
**Objetos**: Es una instancia de una clase.
**Atributos**:los atributos son una propiedad o característica que se puede asignar a un objeto (elemento).
**Métodos**:Son aquellas acciones que un objeto puede realizar.

## Prototipos
Las clases son una forma fácil de simplificarnos la escritura de los prototipos. JavaScript es un lenguaje orientado a objetos, basado en prototipos y no en clases. 
Los motores de JavaScript transformar las clases en funciones prototipales.

* Prototipo de tipo **OBJECT**
```
const animal = {
    nombre: 'copito',
    sonar() {
        console.log('Hago sonidos porque estoy vivo.')
    }
}
console.log(animal)
```
```
{nombre: 'copito', sonar: ƒ}
    nombre: "copito"
    sonar: ƒ sonar()
    [[Prototype]]: Object
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        propertyIsEnumerable: ƒ propertyIsEnumerable()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        valueOf: ƒ valueOf()
        __defineGetter__: ƒ __defineGetter__()
        __defineSetter__: ƒ __defineSetter__()
        __lookupGetter__: ƒ __lookupGetter__()
        __lookupSetter__: ƒ __lookupSetter__()
        __proto__: (...)
        get __proto__: ƒ __proto__()
        set __proto__: ƒ __proto__()
```

* Función **construcutora** con gasto de memoria.
Se declaran dentro de la función constructora.
```
function Animal(nombre, genero) {
    // Atributos
    this.nombre = nombre
    this.genero = genero

    // Métodos
    this.sonar = function() {
        console.log('Hago sonidos porque estoy vivo')
    }
}
const copito = new Animal('copito', 'macho')
console.log(copito)
```
```
Animal {nombre: 'copito', genero: 'macho', sonar: ƒ}
    genero: "macho"
    nombre: "copito"
    sonar: ƒ ()
    [[Prototype]]: Object
        constructor: ƒ Animal(nombre, genero)
        [[Prototype]]: Object
```

* Función **construcutora** con ahorro de memoria.
Se declaran fuera de la función constructora.
```
// Función construcutora
function Animal(nombre, genero) {
    // Atributos
    this.nombre = nombre
    this.genero = genero
}

// Métodos
Animal.prototype.sonar = function() {
    console.log('Hago sonidos porque estoy vivo')
}

const copito = new Animal('copito', 'macho')
console.log(copito)
```
```
Animal {nombre: 'copito', genero: 'macho'}
    genero: "macho"
    nombre: "copito"
    [[Prototype]]: Object
        sonar: ƒ ()
        constructor: ƒ Animal(nombre, genero)
        [[Prototype]]: Object
```

## Herencia Prototípica

* Prototipo de tipo **FUNCIÓN CONSTRUCTORA**
```
// Herencia Prototipica
function Perro(nombre, genero, tamanio) {
    this.super = Animal
    this.super(nombre, genero)
    this.tamanio = tamanio
}

// Perro está heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

// Sobreescritura de métodos del Prototipo padre en el hijo.
Perro.prototype.sonar = function() {
        console.log("Soy un perro y mi sonido es un ladrar")
    }
// Método nuevo
Perro.prototype.ladrar = function() {
    console.log('wuao.. wuao.. wuao..')
}

const copito = new Perro('Copito', 'Macho', 'Mediano')
console.log(copito)
console.log(copito.sonar())
```
```
Perro {nombre: 'Copito', genero: 'Macho', tamanio: 'Mediano', super: ƒ}
    genero: "Macho"
    nombre: "Copito"
    super: ƒ Animal(nombre, genero)
    tamanio: "Mediano"
    [[Prototype]]: Animal
        constructor: ƒ Perro(nombre, genero, tamanio)
        genero: undefined
        ladrar: ƒ ()
        nombre: undefined
        sonar: ƒ ()
        [[Prototype]]: Object
            sonar: ƒ ()
            constructor: ƒ Animal(nombre, genero)
            [[Prototype]]: Object
-   -   -   -   -   -   -   -   -   -   -   -
Soy un perro y mi sonido es un ladrar
```
## Clases y Herencia
### Clases
Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

```
class Animal{
    // El constructor es un método especial que se ejecuta en el momento
    // de instanciar la clase.
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }

    // Métodos
    sonar(){
        console.log('Hago sonidos porque estoy vivo')
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

const copito = new Animal('Copito', 'Macho')
const morocho = new Animal('Morocho', 'Macho')

// Para consola
console.log(copito)
console.log(morocho)

// Para consola
copito.saludar()
morocho.saludar()


```

```
Animal {nombre: 'Copito', genero: 'Macho'}
    genero: "Macho"
    nombre: "Copito"
    [[Prototype]]: Object
        constructor: class Animal
        saludar: ƒ saludar()
        sonar: ƒ sonar()
        [[Prototype]]: Object

Animal {nombre: 'Morocho', genero: 'Macho'}
    genero: "Macho"
    nombre: "Morocho"
    [[Prototype]]: Object
        constructor: class Animal
        saludar: ƒ saludar()
        sonar: ƒ sonar()
        [[Prototype]]: Object
```

```
Hola me llamo Copito
Hola me llamo Morocho
```

### Herencia
En JavaScript, cualquier función puede añadirse a un objeto como una propiedad. Una función heredada se comporta como cualquier otra propiedad, viéndose afectada por el solapamiento de propiedades como se muestra anteriormente (siendo, en este caso, una especie de redefinición de métodos)

```
class Perro extends Animal{
    constructor(nombre, genero, tamanio, edad){
        // Con el metodo super() se manda a llamar el constructor de la clase padre.
        super(nombre, genero)
        this.tamanio = tamanio
        this.edad = edad
    }

    // Método sobreescritos
    sonar(){
        console.log('Soy un perro y mi sonido es un ladrido')
    }

    // Métodos nuevos
    ladrar(){
        console.log('Guaao Guaao !!')
    }

    info_edad(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años.`)
    }
}

const copito = new Animal('Copito', 'Macho')
const morocho = new Perro('Morocho', 'Macho', 'pequeño', 2)

// Para consola
console.log(copito)
console.log(morocho)
```

```
Animal {nombre: 'Copito', genero: 'Macho'}
    genero: "Macho"
    nombre: "Copito"
    [[Prototype]]: Object
        constructor: class Animal
        saludar: ƒ saludar()
        sonar: ƒ sonar()
        [[Prototype]]: Object

Perro {nombre: 'Morocho', genero: 'Macho', tamanio: 'pequeño', edad: 2}
edad: 2
    genero: "Macho"
    nombre: "Morocho"
    tamanio: "pequeño"
    [[Prototype]]: Animal
        constructor: class Perro
        info_edad: ƒ info_edad()
        ladrar: ƒ ladrar()
        sonar: ƒ sonar()
        [[Prototype]]: Object
```

## Métodos estáticos, getters y setters

* No se pueden crear clases o Metodos privados en JavaScript.
* No existen clases abstractas

### Métodos Estáticos
```
class Animal{
    // El constructor es un método especial que se ejecuta en el momento
    // de instanciar la clase.
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }

    // Métodos
    sonar(){
        console.log('Hago sonidos porque estoy vivo')
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }

    // Un método estático se puede ejecutar sin instanciar la clase.
    static queEres(){
        console.log('Hola soy un metodo estático de la clase animal.')
    }
}

const copito = new Animal('Copito', 'Macho')

// Para consola
Animal.queEres()
```
```
Hola soy un metodo estático de la clase animal.
```

### Métodos getters y setters

```
class Animal{
    // El constructor es un método especial que se ejecuta en el momento
    // de instanciar la clase.
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
        this.raza = null
    }

    // Un método estático se puede ejecutar sin instanciar la clase.
    static queEres(){
        console.log('Hola soy un metodo estático de la clase animal.')
    }

    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza
    }
}

const copito = new Animal('Copito', 'Macho')

// Para consola
console.log(copito)

// Para consola
console.log(copito.getRaza)
copito.setRaza = 'Criollo'
console.log(copito.getRaza)
```

```
Animal {nombre: 'Copito', genero: 'Macho', raza: null}
    genero: "Macho"
    nombre: "Copito"
    raza: "Criollo"
    getRaza: (...)
    [[Prototype]]: Object
        constructor: class Animal
        getRaza: (...)
        get getRaza: ƒ getRaza()
        set setRaza: ƒ setRaza(raza)
        [[Prototype]]: Object
```

```
null
// Llamamos al metodo de << setRaza >>
Criollo
```

# Objetos y Funciones del Lenguaje

## Objeto console
```
console.log(console)
```
* Métodos del Objeto
```
assert: ƒ assert()
clear: ƒ clear()
context: ƒ context()
count: ƒ count()
countReset: ƒ countReset()
debug: ƒ debug()
dir: ƒ dir()
dirxml: ƒ dirxml()
error: ƒ error()
group: ƒ group()
groupCollapsed: ƒ groupCollapsed()
groupEnd: ƒ groupEnd()
info: ƒ info()
log: ƒ log()
memory: MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 2190000000}
profile: ƒ profile()
profileEnd: ƒ profileEnd()
table: ƒ table()
time: ƒ time()
timeEnd: ƒ timeEnd()
timeLog: ƒ timeLog()
timeStamp: ƒ timeStamp()
trace: ƒ trace()
warn: ƒ warn()
Symbol(Symbol.toStringTag): "Object"
[[Prototype]]: Object
```

### Prueba de Métodos
* Error, Warn, Info
```
console.error('Esto es un error')
console.warn('Esto es un aviso')
console.info('Esto es un mensaje informativo')
console.log('Registro de lo que pasa en nuestra aplicación')
```
```
Esto es un error
Esto es un aviso
Esto es un mensaje informativo
Registro de lo que pasa en nuestra aplicación
```
* Log
```
let nombre = 'Tomas Jesus', apellido = 'Escobar Cueltan', edad = 23

console.log(nombre, apellido,edad)
console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`)
console.log(`Mi nombre es %s %s y tengo %d años.`,nombre,apellido,edad)
```
```
Tomas Jesus Escobar Cueltan 23
Mi nombre es Tomas Jesus Escobar Cueltan y tengo 23 años.
Mi nombre es Tomas Jesus Escobar Cueltan y tengo 23 años.
```

* Group, GroupCollapsed
```
console.group('Mis características personales')
console.log('Nombre: Tomas Jesus Escobar Cueltan')
console.log('Edad: 23')
console.log('Carrera Universitaria: Ingeniería de sistemas')
console.groupEnd()
```
```
Mis características personales
    Nombre: Tomas Jesus Escobar Cueltan
    Edad: 23
    Carrera Universitaria: Ingeniería de sistemas
```
### Cuanto tiempo tarda el código en ejecutar
* Time
```
console.time('Cuanto tiempo tarda mi código')
const arreglo = Array(1000000)
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i
}
console.timeEnd('Cuanto tiempo tarda mi código')
```
```
Cuanto tiempo tarda mi código: 27.555908203125 ms
```
* Cuantas veces se ejecuta una línea de código - Count()
* Pequeñas pruebas unitarias - assert()

## Objeto Date
Todos objetos sirven en el JavaScript del lado del servidor y del lado del navegador.

* Date() de forma natural.
```
console.log(Date())
```
```
Wed Oct 27 2021 10:42:38 GMT-0500 (hora estándar de Colombia)
```

* Métodos de Date() por separado.
```
let fecha = new Date()
console.log(fecha)
console.log(`Día del mes: ${fecha.getDate()}`)
console.log(`Día de la semana: ${fecha.getDay()}`)
console.log(`Mes: ${fecha.getMonth()}`)
console.log(`Año actual: ${fecha.getFullYear()}`)
console.log(`Hora: ${fecha.getHours()}`)
console.log(`Minutos: ${fecha.getMinutes()}`)
console.log(`Segundos: ${fecha.getSeconds()}`)
console.log(`Milisegundos: ${fecha.getMilliseconds()}`)
```
```
Wed Oct 27 2021 11:18:19 GMT-0500 (hora estándar de Colombia)
Día del mes: 27
Día de la semana: 3
Mes: 9
Año actual: 2021
Hora: 11
Minutos: 18
Segundos: 19
Milisegundos: 888
```

* Métodos de Date(), fecha completa.
```
let fecha = new Date()
console.log(fecha.toString())
console.log(fecha.toDateString())
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())
console.log(fecha.getTimezoneOffset())
```
```
Wed Oct 27 2021 11:28:59 GMT-0500 (hora estándar de Colombia)
Wed Oct 27 2021
27/10/2021
11:28:59
300
```

### Moment. js
Moment. js es una librería que nos permite solventar estos problemas e implementa un sistema de manejo de fechas mucho más cómodo

* https://momentjs.com/

1. Format Dates
2. Relative Time
3. Calendar Time
4. Multiple Locale Support

## Objeto Math

### Métodos
```
console.log(Math)
```
```
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
Symbol(Symbol.toStringTag): "Math"
[[Prototype]]: Object
```

* Métodos matematicos
```
console.log(Math.PI)
console.log(Math.abs(-7.8))
console.log(Math.ceil(7.2))
console.log(Math.floor(7.8))
console.log(Math.round(7.49))
console.log(Math.sqrt(81))
console.log(Math.pow(4,3))
console.log(Math.sign(-0.3))
console.log(Math.random() * 10)
```
```
3.141592653589793
7.8
8
7
7
9
64
-1
7.4906242617339425
```

## Operador de Cortocircuito
Los operadores && y || se llaman operadores en cortocircuito porque si no se cumple la condición de un término no se evalúa el resto de la operación. Por ejemplo: (a == b && c != d && h >= k) tiene tres evaluaciones: la primera comprueba si la variable a es igual a b. Si no se cumple esta condición, el resultado de la expresión es falso y no se evalúan las otras dos condiciones posteriores.

En un caso como ( a < b || c != d || h <= k) se evalúa si a es menor que b. Si se cumple esta condición el resultado de la expresión es verdadero y no se evalúan las otras dos condiciones posteriores.

El operador ! recomendamos no usarlo hasta que se tenga una cierta destreza en programación. Una expresión como (!esVisible) devuelve false si (esVisible == true), o true si (esVisible == false). En general existen expresiones equivalentes que permiten evitar el uso de este operador cuando se desea.

* **Cortocircuito OR:**Cuando el valor de la izquierda en la expresión siempre siempre pueda validar a **true**, es el valor que se cargará por defecto.

* **Cortocircuito AND:**Cuando el valor de la izquierda en la expresión siempre siempre pueda validar a **false**, es el valor que se cargará por defecto.


## Alert, Confirm y Prompt
**Solo para el JavaScript de los navegadores**
```
let alerta = alert('Está es una alerta')
let confirmacion = confirm('Esto es una confirmación')
let aviso = prompt('Permite ingresar valores')

console.log(alerta)
console.log(confirmacion)
console.log(aviso)
```
```
undefined
true
Hola
```

## Expresiones Regulares
Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(), matchAll(), replace(), replaceAll() (en-US), search() y split() métodos de String. Este capítulo describe las expresiones regulares de JavaScript, mas en [JavaScriptWeb](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).

* Las expresiones regulares reciben dos valores, el primero es la cadena a buscar, el segundo son los comidnes o banderas, muy importante este ultimo. 

* [expReg01, expReg02]

```
let cadena = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi necessitatibus asperiores iure accusamus quas. Eaque alias velit placeat. Iste, nemo. Tenetur laborum iusto perferendis, repudiandae quidem possimus adipisci. Corporis, esta'

let expReg01 = new RegExp("lorem","i")
let expReg02 = /lorem/i

console.log(expReg01.test(cadena))
console.log(expReg01.exec(cadena))

console.log(expReg02.test(cadena))
console.log(expReg02.exec(cadena))
```
```
true
['Lorem', index: 0, input: 'Lorem ipsum dolor sit, amet consectetur adipisicin…udiandae quidem possimus adipisci. Corporis, esta', groups: undefined]

true
['Lorem', index: 0, input: 'Lorem ipsum dolor sit, amet consectetur adipisicin…udiandae quidem possimus adipisci. Corporis, esta', groups: undefined]
```

## Funciones Anónimas Autoejecutables

Es algo viejo que casi no se utiliza

## Módulos ( import / export )
Con estas cualidades podemos crear el codigo en modulos distintos y podemos llamarlos desde cualquier lado.

* Archivo **constantes.js**
```
export const Num_PI = Math.PI
```

* Archivo **aritmetica.js**
```
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
```

* Archivo **modulos.js**
```
import {Num_PI} from "./constantes.js"
import saludar, {math_basicas} from "./aritmetica.js"
// Le podemos colocar alias al importar, como:
// import {math_basicas as mb} from "./aritmetica.js"

console.log(Num_PI)
console.log('Funciones basicas')
console.log(math_basicas.sumar(12, 4))
console.log(math_basicas.restar(12, 4))
console.log(math_basicas.multiplicar(12, 4))
console.log(math_basicas.dividir(12, 4))
// Llamado de la función por defecto del modulo aritmetica.js.
saludar('Tomas Escobar')
```

* Archivo **modulos.html**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Módulos ( import / export )</title>
</head>
<body>
    <script src="js/modulos.js" type="module"></script>
</body>
</html>
```

* Resultado en consola del archivo **modulos.html**
```
3.141592653589793
Funciones basicas
16
8
48
3
Hola Tomas Escobar soy la función por defecto del modulo aritmetica.js
```

### Notas
* **modulos.html**
**src:** Carga el archivo JavaScript **modulos.js**.
**type:** Le damos la propiedad de poder importar otros archivos punto JavaScript.
```
<script src="js/modulos.js" type="module"></script>
```
 

# Ejercicios de Lógica de Programación


# Programación Asíncrona

## Temporizadores (setTimeout & setInterval)
### **SetTimeout** - Ejecuta
```
console.log("Inicio.")
setTimeout(() => {
    console.log('Ejecutando un setTimeout, esto se ejecuta una sola vez')
}, 3000);
console.log("Fin.")
```
```
Inicio.
Fin.
Ejecutando un setTimeout, esto se ejecuta una sola vez
```
* Terminara de ejecutar un **SetTimeout**
```
let temporizador = setTimeout(() => {
    console.log('Ejecutando un setTimeout, esto se ejecuta una sola vez')
}, 3000);
clearTimeout(temporizador)
```

### **SetInterval** - Ejecuta
```
console.log("Inicio.")
setInterval(() => {
    console.log('Ejecutando un setInterval, esto se ejecuta cada cierto intervalo de tiempo')
}, 3000);
console.log("Fin.")
```
```
Inicio.
Fin.
# Este mensaje sigue apareciendo N Veces.
Ejecutando un setInterval, esto se ejecuta cada cierto intervalo de tiempo
```
* Terminara de ejecutar un **SetInterval**
```
let temporizador = setInterval(() => {
    console.log('Ejecutando un setInterval, esto se ejecuta cada cierto intervalo de tiempo')
}, 3000);
clearInterval(temporizador)
```

