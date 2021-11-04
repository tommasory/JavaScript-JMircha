# Asincronía
La asincronía es uno de los pilares fundamentales de Javascript, ya que es un lenguaje de programación de un sólo subproceso o hilo (single thread), lo que significa que sólo puede ejecutar una cosa a la vez.

Si bien los idiomas de un sólo hilo simplifican la escritura de código porque no tiene que preocuparse por los problemas de concurrencia, esto también significa que no puede realizar operaciones largas como el acceso a la red sin bloquear el hilo principal.

Imagina que solicitas datos de una API. Dependiendo de la situación, el servidor puede tardar un tiempo en procesar la solicitud mientras bloquea el hilo principal y hace que la página web no responda.

Ahí es donde entra en juego la asincronía que permite realizar largas solicitudes de red sin bloquear el hilo principal.

JavaScript fue diseñado para ser ejecutado en navegadores, trabajar con peticiones sobre la red y procesar las interacciones de usuario, al tiempo que mantiene una interfaz fluida.

**Javascript** usa un **modelo asíncrono** y **no bloqueante**, con un **loop** de **eventos** implementado en un sólo hilo, (**single thread**) para operaciones de entrada y salida (**input/output**).

Gracias a esta solución, Javascript es áltamente concurrente a pesar de emplear un sólo hilo.

## ¿Qué es el event loop en JavaScript?
js, es su **Event loop**, el cual es un único subproceso que realiza todas las operaciones de entrada y salida (I/O) de forma asíncrona. 
El **Event loop** es una cola de funciones. Cuando se ejecuta una función asíncrona, la función devuelve el código interno de la función, lo envuelve y se inserta en una cola.

### Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

* Procesamiento Single thread (Hilo único) y Multi thread (Hilos múltples).
* Operaciones de CPU y Operaciones de I/O (Entrada y Salida).
* Operaciones Concurrentes y Paralelas.
* Operaciones Bloqueantes y No Bloqueantes.
* Operaciones Síncronas y Asíncronas.

## Single thread y Multi thread
Un hilo la unidad básica de ejecución de un proceso, cada que abres un programa como el navegador o tu editor de código, se levanta un proceso en tu computadora e internamente este puede tener uno o varios hilos (threads) ejecutándose para que el proceso funcione.

## Operaciones de CPU y de Entrada y Salida
* **Operaciones CPU**: Aquellas que pasan el mayor tiempo consumiendo Procesos del CPU, por ejemplo, la escritura de ficheros.
* **Operaciones de Entrada y Salida**: Aquellas que pasan la mayor parte del tiempo esperando la respuesta de una petición o recurso, como la solicitud a una API o BD.

## Concurrencia y Paralelismo
* **Concurrencia**: cuando dos o más tareas progresan simultáneamente.
* **Paralelismo**: cuando dos o más tareas se ejecutan, al mismo tiempo.

## Bloqueante y No Bloqueante
Se refiere a como la fase de espera de las operaciones afectan a nuestra aplicación:

* **Bloqueante**: Son operaciones que no devuelven el control a nuestra aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.
* **No Bloqueante**: Son operaciones que devuelven inmediatamente el control a nuestra aplicación, independientemente del resultado de esta. En caso de que se haya completado, devolverá los datos solicitados. En caso contrario (si la operación no ha podido ser satisfecha) podría devolver un código de error.

## Síncrono y Asíncrono
Se refiere a ¿cuándo tendrá lugar la respuesta?:

* **Síncrono**: La respuesta sucede en el presente, una operación síncrona esperará el resultado.
* **Asíncrono**: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.

Con lo anterior en JavaScript podemos tener:
* Código síncrono y bloqueante o
* Código asíncrono y no bloquenate

## JavaScript Síncrono
Cada operación se hace de una vez, bloqueando el flujo de ejecución, el hilo es bloqueado mientras espera la respuesta, cuando esta se procesa pasa a la siguiente operación y así sucesivamente al terminar todas las operaciones.

```
console.log("Inicio");

function dos() {
  console.log("Dos");
}

function uno() {
  console.log("Uno");
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");
```
El resultado en consola es:
```
Inicio
Uno
Dos
Tres
Fin
```

## JavaScript Asíncrono
Cada operación se ejecuta y devuelve inmediatamente el control al hilo, evitando el bloqueo, cuando cada operación termine se enviará una notificación de que ha terminado, es entonces cuando la respuesta se encolará para ser procesada.

```
console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");
```
El resultado en consola es:
```
Inicio
Tres
Fin
Uno
Dos
```

## Herramienta para probar códigos de está naturaleza
link: [loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)


## Mecanismos asíncronos en JavaScript
Para controlar la asincronía, JavaScript cuenta con algunos mecanismos:

* **Callbacks**.
* **Promises**.
* **Async / Await**.

## Callbacks
Una **callback** (llamada de vuelta) es una función que se ejecutará después de que otra lo haga.

Es un mecanismo para asegurar que cierto código no se ejecute hasta que otro haya terminado.

Al ser JavaScript un lenguaje orientado a eventos, las **callbacks** son una buena técnica para controlar la asíncronía, sin embargo... *Callback Hell* 😈🤘.

```
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin Callback");
            console.log("Callback Hell !!!!!😈🤘");
            console.log("http://callbackhell.com/");
          });
        });
      });
    });
  });
});
```

### Example Callbacks
* Llamadas en lista
```
console.log("Inicio.")
function cuadradoCallback(value, callback) {
    let  tiempo = 0 | (Math.random() * 10000)
    console.log(`Orden y tiempo: ${value} Num,${tiempo} Msg`)
    setTimeout(() => {
        callback(value, value * value);
    }, tiempo); // Temporizador dinamico
}

for (let i = 2; i < 6; i++) {
    cuadradoCallback(i, (value, result) => {
        console.log('Inicia Callback');
        console.log(`Callback: ${value}, ${result}`)
    })
}
console.log("Fin.")
```
```
Inicio.
Orden y tiempo: 2 Num,8509 Msg
Orden y tiempo: 3 Num,4884 Msg
Orden y tiempo: 4 Num,2192 Msg
Orden y tiempo: 5 Num,8908 Msg
Fin.
Inicia Callback
Callback: 4, 16
Inicia Callback
Callback: 3, 9
Inicia Callback
Callback: 2, 4
Inicia Callback
Callback: 5, 25
```

* Llamadas anidadas - **Callbacks**
**Se ejecutará después de que otra lo haga.**
```
console.log("Inicio.")
function cuadradoCallback(value, callback) {
    let  tiempo = 0 | (Math.random() * 10000)
    console.log(`Orden y tiempo: ${value} Num,${tiempo} Msg`)
    setTimeout(() => {
        callback(value, value * value);
    }, tiempo); // Temporizador dinamico
}

cuadradoCallback(2, (value, result) => {
    console.log('Inicia Callback');
    console.log(`Callback: ${value}, ${result}`)
    cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`)
        cuadradoCallback(4, (value, result) => {
            console.log(`Callback: ${value}, ${result}`)
            cuadradoCallback(5, (value, result) => {
                console.log(`Callback: ${value}, ${result}`)
            })
        })
    })
})
console.log("Fin.")
```
```
Inicio.
Orden y tiempo: 2 Num,5631 Msg
Fin.
Inicia Callback
Callback: 2, 4
Orden y tiempo: 3 Num,1516 Msg
Callback: 3, 9
Orden y tiempo: 4 Num,5347 Msg
Callback: 4, 16
Orden y tiempo: 5 Num,7684 Msg
```

## Promesas
Nos sirve siempre y cuando **tengamos varios procesos asincronos**, por si no es asá podemos usar **Callback**.

Una **promesa** es un objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:

1. Pendiente.
2. Resuelta.
3. Rechazada.

Tienen la particularidad de que se pueden encadenar (**then**), siendo el resultado de una promesa, los datos de entrada de otra posible función.

Las **promesas** mantienen un código más legible y mantenible que las callbacks, además tienen un mecanismo para la detección de errores (**catch**) que es posible usar en cualquier parte del flujo de datos.

```
console.log("Inicio.")
function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(
            `Error, el valor " ${value} " ingresado no es un número`
        );
    }
    let  tiempo = 0 | (Math.random() * 1000)
    console.log(`Numero y tiempo: ${value} Num,${tiempo} Msg`)
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({value, result:value * value})
        }, tiempo); // Temporizador dinamico
    })
}

cuadradoPromise(2)
    .then((obj)=>{
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(3)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(4)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(5)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`)
    }) // Corta el programa en tiempo real si ocurre un fallo en la funcion
    .catch(err => console.error(err));

console.log("Fin.")
```
```
```
