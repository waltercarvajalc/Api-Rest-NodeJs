const mongoose = require('mongoose');

/*se crea el esquema*/
const estadoEquipoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        unique: true,
        required: true
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
const EstadoEquipo = mongoose.model('EstadoEquipo',estadoEquipoSchema);

module.exports = EstadoEquipo;  /*exportamos el modelo para poder utilizarlo dentro del controladot*/