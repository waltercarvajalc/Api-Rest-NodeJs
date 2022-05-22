const express = require('express');
const InventarioCtrl = require('../controllers/InventarioController');

const Router = express.Router();

Router.get('/', InventarioCtrl.index)                                // api.com/Inventario/ Index: Listar todos lInventarios
      .post('/', InventarioCtrl.create)                              // api.com/Inventario/ Create: Crear un nueInventarios
      .get('/:key/:value', InventarioCtrl.find, InventarioCtrl.show)    // api.com/Inventario/usuario/_ID Show: Muestra Inventarios en específico
      .put('/:key/:value', InventarioCtrl.find, InventarioCtrl.update)    // api.com/Inventario/nombre/Donal Trump Update: Actualizar Inventarios en especifico
      .delete('/:key/:value', InventarioCtrl.find, InventarioCtrl.remove);// api.com/Inventario/nombre/Donal Trump Remove: Elimina Inventarios en especifico

module.exports = Router;