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

