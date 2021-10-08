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

# Estructuras de Control


# Programación Orientada a Objetos


# Objetos y Funciones del Lenguaje


# Ejercicios de Lógica de Programación


# Programación Asíncrona



# Nuevos Tipos y Características


# this en JavaScript


# JSON: JavaScript Object Notation


# DOM: Document Object Model


# Ejercicios Prácticos del DOM


# AJAX: Asynchronous JavaScript And XML


# APIs REST


# Ejercicios Prácticos de AJAX y APIs


# Single Page Applications (SPA)


# Reactividad

