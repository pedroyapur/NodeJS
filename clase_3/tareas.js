const fs = require('fs');

let todasLasTareas = {
    archivo: 'tareas.json',
    leer: function() {
        let string = fs.readFileSync(this.archivo,'utf-8');
        return JSON.parse(string);
    },
    // crear una funcion que escriba un arraay en el JSON
    escribirJson: function(tareas) {
        let tareasJson = JSON.stringify(tareas,null,' ');
        return fs.writeFileSync(this.archivo,tareasJson);
    },
    // funcion guardar tarea
    guardarTarea : function(tarea) {
     let todasLasTareas = this.leer()
     todasLasTareas.push(tarea)
     this.escribirJson(todasLasTareas)
    },
    filtrarPorEstado: function(estado) {
        let todasLasTareas = this.leer()
        let filtradas = todasLasTareas.filter(function(tarea){
            return estado== tarea.estado
        })
        return filtradas
    }
}
module.exports = todasLasTareas
