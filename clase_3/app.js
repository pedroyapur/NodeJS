let chalk = require('chalk')
let tareasJson = require('./tareas');
let accion = process.argv[2]
let misTareas = tareasJson.leer()
switch(accion){
    case 'listar':
        console.log(chalk.underline.bold('Tareas Registradas'))
        for (i=0; i<misTareas.length; i++) {
            console.log(misTareas[i].titulo)
        }
        break
    case 'crear':
        let tarea= {
            titulo: process.argv[3],
            estado: 'pendiente'
        }
        tareasJson.guardarTarea(tarea)
    break
    case 'filtrar' :
         let estado = process.argv[3];
         console.log();
         console.log('Tareas ' + estado);
         console.log('------------------');

    let filtradas = tareasJson.filtrarPorEstado(estado);

         filtradas.forEach((tarea) => {
             console.log(tarea.titulo)
         });

    break;

    case undefined :
        console.log(chalk.blueBright('Debes escribir un comando'))
    break;
    
    default :
    console.log('no se que decis')
    console.log('Las acciones disponibles son: listar');
    console.log('Las acciones disponibles son: listar, crear, filtrar, ');
    break;

}


// console.log(tareasJson.leer()) 