const express = require('express');
const EstadoEquipoCtrl = require('../controllers/EstadoEquipoController');

const Router = express.Router();

Router.get('/',EstadoEquipoCtrl.index)     // api.com/EstadoEquipo/ Index: Listar todos los EstadoEquipo
      .post('/',EstadoEquipoCtrl.create)   // api.com/EstadoEquipo/ Create: Crear un nuevo EstadoEquipo
      .get('/:key/:value',EstadoEquipoCtrl.find,EstadoEquipoCtrl.show)    // api.com/EstadoEquipo/estado/activo Show: Muestra un EstadoEquipo en específico
      .put('/:key/:value',EstadoEquipoCtrl.find,EstadoEquipoCtrl.update)    // api.com/EstadoEquipo/nombre/Computador Update: Actualizar un EstadoEquipo en especifico
      .delete('/:key/:value',EstadoEquipoCtrl.find,EstadoEquipoCtrl.remove);// api.com/EstadoEquipo/nombre/Computador Remove: Elimina un EstadoEquipo en especifico

module.exports = Router;