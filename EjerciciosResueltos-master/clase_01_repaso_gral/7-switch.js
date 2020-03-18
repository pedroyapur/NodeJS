// Ejercicio 1
let dia = 'lunes'
function finDeSemana(dia) {
    switch (dia) {
        case 'viernes':
            console.log('buen finde')
            break
        case 'lunes':
            console.log('buena semana')
            break
        default:
            console.log('buen dia')
            break
    }
}
finDeSemana(dia);

//Ejercicio 3
function tengoClases(dia) {
    switch (dia) {
        case 'lunes':
        case 'miercoles':
        case 'viernes':
            console.log('tenés clases')
            break
        default:
            console.log('no tenés clases')
    }
}

tengoClases(dia)