//  Estructura
// for (inicio, condicion, modificador) {
//     // Código que se ejecutará en cada repetición
// }

// Ejercicio 1
function loro(frase) {
    for (let repeticion = 0; repeticion <= 5; repeticion++) 
    {
        console.log(frase)
    }
}
loro('Hola chicos')


function noParesDeContarImparesHasta(numero) {
    let cont = 0
    for (let i = 0; i < numero; i++) {
        if (i % 2) {
            cont++
        }
    }
    return cont
}

let impares = noParesDeContarImparesHasta(12)
console.log(impares)