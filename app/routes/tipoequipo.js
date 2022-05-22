const express = require('express');
const TipoEquipoCtrl = require('../controllers/TipoEquipoController');

const Router = express.Router();

Router.get('/',TipoEquipoCtrl.index)     // api.com/tipoequipo/ Index: Listar todos los TipoEquipo
      .post('/',TipoEquipoCtrl.create)   // api.com/tipoequipo/ Create: Crear un nuevo TipoEquipo
      .get('/:key/:value',TipoEquipoCtrl.find,TipoEquipoCtrl.show)    // api.com/tipoequipo/estado/activo Show: Muestra un TipoEquipo en específico
      .put('/:key/:value',TipoEquipoCtrl.find,TipoEquipoCtrl.update)    // api.com/tipoequipo/nombre/Computador Update: Actualizar un TipoEquipo en especifico
      .delete('/:key/:value',TipoEquipoCtrl.find,TipoEquipoCtrl.remove);// api.com/tipoequipo/nombre/Computador Remove: Elimina un TipoEquipo en especifico

module.exports = Router;