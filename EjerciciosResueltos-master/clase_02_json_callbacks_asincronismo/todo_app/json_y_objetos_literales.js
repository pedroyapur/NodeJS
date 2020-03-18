/* REPASO OBJETOS LITERALES*/

// PASOS

// 1) Definir un objeto literal como tarea

let tarea = {
        titulo: 'Tratar de conquistar el mundo',
        estado: 'En progreso'
    }

// 2) Acceder a atributos de la tarea, jugar con la misma
console.log(tarea.titulo);
console.log(tarea.estado);
tarea.estado = 'Finalizada'
console.log(tarea.estado);

// 3) Agregar una función a la tarea

let tarea2 = {
    titulo: 'Tratar de conquistar el mundo 2',
    estado: 'En progreso',
    leertarea: function() { console.log(this.titulo)}
}

tarea2.leertarea();


// 5)  Arrays de tareas

let misTareas = [
    {
        titulo: 'Tratar de conquistar el mundo',
        estado: 'En progreso'
    },
    {
        titulo: 'Estudiar Node',
        estado: 'Terminada',
        leertarea: function() { console.log(this.titulo)}
    }
];

// console.log('misTareas es de tipo', typeof misTareas);
misTareas[1].leertarea();

let misTareasJson = JSON.stringify(misTareas);

    console.log('misTareasJson es de tipo', typeof misTareasJson);
console.log(misTareasJson);