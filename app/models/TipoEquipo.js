const mongoose = require('mongoose');

/*se crea el esquema*/
const tipoEquipoSchema = new mongoose.Schema({

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
const TipoEquipo = mongoose.model('TipoEquipo',tipoEquipoSchema);

module.exports = TipoEquipo;  /*exportamos el modelo para poder utilizarlo dentro del controladot*/