const { io } = require('../server'); //Requerimos el archivo para reutilizar la variable io 

//Cuando un usuario se conecta
io.on('connection', (client) => {
    console.log('Usuario conectado');

    //Enviar mensaje cuando el usuario se connecta
    client.emit("enviarMensaje", {
        Usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente cuando envia informacion 
    //para enviar la respuesta que se recibio la informacion se recibe el callback como parametro
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        client.broadcast.emit("enviarMensaje", mensaje);
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // }else{
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'
        //     });
        // }
       
    });
});
