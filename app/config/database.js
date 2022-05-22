/*aqui se tendra la conexion a la base de datos*/

const mongoose = require('mongoose');
const CONFIG = require('./config');
/*objeto que inicializa la conexion a la bd*/
module.exports = {
    connection: null,
    connect: function(){
        if(this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB).then(connection => {
            this.connection = connection;
            console.log('Conexion a Base de Datos Exitosa');
        }).catch(error => console.log(error));
    }
}