console.log('Hola desde la calculadora');

let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

// Micro desafío 1
// Escribir y ejecutar la función de restar con dos número cualquiera

// Micro desafío 2
// Escribir la función de dividir teniendo en cuenta que el segundo número no puede ser 0

// Micro desafío 3
// Escribir y ejecutar la función de división
// Si el segundo número es 0 devolver error de división por cero


console.log(sumar(10, 13));
console.log(restar(21, 5));
console.log(restar(21, 33));
console.log(multiplicar(2, 6));
console.log(multiplicar(5, 0));
console.log(dividir(10, 5));
console.log(dividir(40, 0));

