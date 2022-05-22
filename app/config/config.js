/*aqui se crea un objeto para exportar que va tener algunas variables de consfiguracion*/

module.exports = {
    PORT: process.env.PORT || 3000,   /*la aplicacion se va a ejecutar en el puerto 3000*/
    DB: process.env.DB || 'mongodb://localhost:27017/api-walter'  /*nombre de la base de datos*/
}