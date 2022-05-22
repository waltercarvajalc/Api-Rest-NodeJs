const express = require('express');
const MarcaCtrl = require('../controllers/MarcaController.js');

const Router = express.Router();

Router.get('/',MarcaCtrl.index)     // api.com/Marca/ Index: Listar todos los Marca
      .post('/',MarcaCtrl.create)   // api.com/Marca/ Create: Crear un nuevo Marca
      .get('/:key/:value',MarcaCtrl.find,MarcaCtrl.show)    // api.com/Marca/estado/activo Show: Muestra un Marca en específico
      .put('/:key/:value',MarcaCtrl.find,MarcaCtrl.update)    // api.com/Marca/nombre/Computador Update: Actualizar un Marca en especifico
      .delete('/:key/:value',MarcaCtrl.find,MarcaCtrl.remove);// api.com/Marca/nombre/Computador Remove: Elimina un Marca en especifico

module.exports = Router;