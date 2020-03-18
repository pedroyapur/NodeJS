var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    saludar: function () {
        // Accedemos a la propiedad "nombre" de ESTE objeto con la palabra reservada THIS
        return "¡Hola! Mi nombre es " + this.nombre;
    }
}

// Ejemplo
let perro = {
    nombre: 'santiago',
    edad: 34,
    vacunado: true
}