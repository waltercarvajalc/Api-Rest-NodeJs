const express = require('express');
const bodyParser = require('body-parser');

const App = express();
const Tipoequipo = require('./routes/tipoequipo');
const Usuario = require('./routes/usuario');
const Inventario = require('./routes/inventario');
const Estadoequipo = require('./routes/estadoequipo');
const Marca = require('./routes/marca');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/tipoequipo', Tipoequipo);
App.use('/usuario', Usuario);
App.use('/inventario', Inventario);
App.use('/estadoequipo', Estadoequipo);
App.use('/marca', Marca);

module.exports = App;