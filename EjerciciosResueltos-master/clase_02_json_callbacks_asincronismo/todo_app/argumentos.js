/* DESCRIPCION
Acá se mostrará como hace un proceso de Node para leer
el comando y los parámetros que se ejecutan en la terminal
*/

// PASOS

//1) Hacer console log de process.argv
console.log('Estamos en argumentos.js');
console.log(process);
console.log(process.argv);

let accion = process.argv[2];

//2) Jugar ejecutando comandos
// Explicar que podemos pedir posiciones que no existan
// En ese caso será undefined
let parametro = process.argv[3];
console.log(process.argv);





process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});