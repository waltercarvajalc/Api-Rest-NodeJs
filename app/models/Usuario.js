const mongoose = require('mongoose');

/*se crea el esquema*/
const UsuarioSchema = new mongoose.Schema({

    nombre: {
        type: String,
        unique: true,
        required: true
    },

    email:{
        type: String,
        unique: true,
    },

    estado: {
        type: String,
        required: true,
        enum: ['activo','inactivo']
    },

    fechaCreacion: {
        type: Date,
        default: Date.now()
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now()
    }

});
/*se convierte el esquema en modelo*/
const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;  /*exportamos el modelo para poder utilizarlo dentro del controlador*/