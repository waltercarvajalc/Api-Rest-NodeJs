const express = require('express');
const UsuarioCtrl = require('../controllers/UsuarioController');

const Router = express.Router();

Router.get('/', UsuarioCtrl.index)                                // api.com/usuario/ Index: Listar todos los usuarios
      .post('/', UsuarioCtrl.create)                              // api.com/usuario/ Create: Crear un nuevo usuarios
      .get('/:key/:value', UsuarioCtrl.find, UsuarioCtrl.show)    // api.com/usuario/estado/activo Show: Muestra un usuarios en específico
      .put('/:key/:value', UsuarioCtrl.find, UsuarioCtrl.update)    // api.com/usuario/nombre/Donal Trump Update: Actualizar un usuarios en especifico
      .delete('/:key/:value', UsuarioCtrl.find, UsuarioCtrl.remove);// api.com/usuario/nombre/Donal Trump Remove: Elimina un usuarios en especifico

module.exports = Router;