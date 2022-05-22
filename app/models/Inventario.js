const mongoose = require('mongoose');
const { Schema } = mongoose;

/*se crea el esquema*/
const InventarioSchema = new mongoose.Schema({

    serial: {
        type: String,
        unique: true,
        required: true
    },

    modelo:{
        type: String,
        unique: true,
    },

    descripcion: {
        type: String,
        required: true,
    },

    color: {
        type: String,
        required: true,
    },

    fechaCompra: {
        type: String,
    },

    precio: {
        type: Number,
    },

    usuario: { 
        type: Schema.Types.ObjectId, 
        ref: 'usuario',
        required: true,
    },

    tipoEquipo: { 
        type: Schema.Types.ObjectId, 
        ref: 'tipoEquipo',
        required: true,
    },

    estadoEquipo: { 
        type: Schema.Types.ObjectId, 
        ref: 'estadoEquipo',
        required: true,
    },

    marca: { 
        type: Schema.Types.ObjectId, 
        ref: 'marca',
        required: true,
    },



});

/*se convierte el esquema en modelo*/
const Inventario = mongoose.model('Inventario', InventarioSchema);

module.exports = Inventario;  /*exportamos el modelo para poder utilizarlo dentro del controlador*/