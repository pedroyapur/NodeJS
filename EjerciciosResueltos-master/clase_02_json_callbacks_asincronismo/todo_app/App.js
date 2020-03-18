let chalk = require('chalk');
let tareasJson = require('./tareas.js');
let accion = process.argv[2];
switch(accion){
    case 'listar':
        console.log(chalk.underline.bold('Tareas registradas'))
        let tareas = tareasJson.leer();
        tareas.forEach((task, index) => {
            console.log(`${chalk.bold(++index + '.')} ${task.titulo} . ${chalk.green(task.estado)}`)
        });
        console.log();
        break
    case undefined :
        console.log('necesitas pasar un comando, podes escribir listar, crear, etc')    
        break
    default :
        console.log('no se que decis')
        break
}
// console.log(process.argv)
// console.log(tareasJson.leer());