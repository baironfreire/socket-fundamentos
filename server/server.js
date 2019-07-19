const express = require('express');
const socketIO = require('socket.io'); //Cargamos la libreria de socket
const http = require('http'); // Modulo que trae node por defecto

const path = require('path');

const app = express();
let server = http.createServer(app); // Crear un servidor, expres usa funciones de http , por eso se puede enviar app como parametros 

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


//Inicalizamos el sockeIO, comunicacion con el backen
//Se export para poder utilizar la variable io en otro archivo js
module.exports.io = socketIO(server);
require('./sockets/socket'); // requerimos el codigo para que funcione la configuracion de socket



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});