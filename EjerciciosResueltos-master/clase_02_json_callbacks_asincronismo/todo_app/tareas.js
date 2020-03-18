const fs = require('fs');

let tareas = {
    archivo: 'tareas.json',
    leer: function() {
        let string = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(string);
    },
}

module.exports = tareas;